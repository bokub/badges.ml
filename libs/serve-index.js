const fs = require('fs')
const marked = require('marked')
const { join } = require('path')

const presetCSS = fs.readFileSync(join(__dirname, '../node_modules/serve-marked/presets/merri.css'), 'utf8')
const indexMd = fs.readFileSync(join(__dirname, 'index-shutdown.md'), 'utf8')

const serveMarked = (markdown, helmetOptions) => {
  const bodyHTML = marked(markdown)
  return helmet(bodyHTML, helmetOptions)
}

function helmet (bodyHTML, options = {}) {
  // Custom body wrapper
  if (typeof options === 'function') {
    return options(bodyHTML)
  }

  const {
    title = '',
    inlineCSS = '',
    contentClassName = 'markdown-body',
    beforeHeadEnd = '',
    beforeBodyEnd = ''
  } = options

  return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width">
        <title>${title}</title>
        <style>${presetCSS}</style>
        <style>${inlineCSS}</style>
        ${beforeHeadEnd}
      </head>
      <body>
        <div class="${contentClassName}">
          ${bodyHTML}
        </div>
        ${beforeBodyEnd}
      </body>
    </html>
  `
}

module.exports = serveMarked(indexMd, {
  title: 'Badges.ml - badges for your brackets extensions',
  inlineCSS: `
    body { max-width: inherit }
    body > * { width: 960px; margin-left: auto; margin-right: auto; box-sizing: border-box }
    h1 img { height: 42px; position: relative; top: 3px }
    h1 + p { letter-spacing: 0.4px; color: #333; font-size: 20px }
    h1 + p + p { justify-content: center; display: flex; flex-direction: row; margin: 0 auto; }
    h1 + p + p a { padding: 5px 8px; color: #AAA; }
    h1 + p + p a { font: 14px/20px Roboto, sans-serif; text-transform: uppercase; font-weight: 400; letter-spacing: 0.5px }
    h1 + p + p a:hover { color: #777; }
    img { height: 20px }
    .shutdown { background: #fff8d5; margin: 25px -20px 0; padding: 10px 20px; font: 16px Arial, sans-serif }
    #service-shutdown { margin-top: 20px }

    pre, code { background-color: #EEF2F8; font-weight: 400 }
    pre > code { padding: 0 }

    ul > li { vertical-align: top; font: 16px/32px sans-serif; color: #777 }
    ul > li code { padding: 0.3em 0.5em; display: pre; color: #333 }
    a code { color: #06D }

    td + td a { font-family: monospace; margin-right: 20rem }

    dl { margin-top: 0 }
    dt { margin-bottom: 1em; padding-top: 1em; border-bottom: 1px solid #DDD; line-height: 2em }
    dt a { color: #333; position: relative }
    dt a:hover { text-decoration: none }
    dt a.title:hover:before { content: '➻'; display: inline-block; width: 0px; position: relative }
    dt a.title:hover:before { left: -1.2em; font: 20px/20px Arial; vertical-align: middle; color: #CCC }
    dt a.doc { background: #CCC; color: #FFF; font: 14px/16px verdana, sans-serif; height: 16px; width: 16px }
    dt a.doc { border-radius: 50%; display: inline-block; text-align: center; margin-left: 0.5em }
    dt a.doc:hover { background-color: #BBB }
    dd { font: 14px/20px monospace; vertical-align: top; height: 28px; white-space: nowrap; margin: 0 }
    dd img { vertical-align: top }
    dd b { font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif }
    dd b { display: inline-block; min-width: 15em; text-align: right; font-weight: 300; color: #999 }
    dd i { display: inline-block; min-width: 13.5em }

    #the-end { margin: 5rem auto; text-align: center; text-shadow: 0 0 4px rgba(0,0,0,0.1) }

    #footer { width: 100vw; margin: 0 -1rem; background-color: #333; color: #CCC }
    #foo-content { max-width: 960px; margin: 0 auto; padding: 1rem 1rem 2rem; letter-spacing: 0.5px }
    #foo-content { display: grid; grid-template-columns: 1fr 1fr }
    #foo-content h3 { font-weight: 300 }
    #foo-content img { height: 16px; color: #FFF; opacity: 0.6; margin-right: 8px; position: relative; top: 1px }
    #foo-content p { line-height: 2em; font-weight: 300 }
    #foo-content a { color: #FFF }
    #foo-content aside { padding: 1rem 1rem; display: flex; justify-content: flex-end; align-items: flex-end }
    #foo-content aside a { line-height: 2em; margin-left: 1rem }
    
    .github-corner:hover .octo-arm { animation:wave 560ms ease-in-out } 
    @keyframes wave{ 0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)} }    
  `,
  beforeHeadEnd: `
    <link rel="icon" type="image/png" href="/static/favicon.png">
    <meta name="google-site-verification" content="S1eE0CD3g08PkSBvK7cxzrnQl52oXWchy3voONNFNUg" />
`,
  beforeBodyEnd: `
    <div id="the-end">⚡️</div>
    <div id="footer">
      <div id="foo-content">
        <segment>
          <h3>Badges.ml</h3>
          <p>
            A fork of the awesome <a href="https://badgen.net">Badgen Service</a>
            <br/>
            Hosted on <del>Now Cloud</del> <a href="https://vercel.com/">Vercel</a>
          </p>
        </segment>
        <aside>
          <a href="https://stats.uptimerobot.com/r8QDWt63B/778749989">Status</a>
          <a href="https://github.com/brackets-extension-badges/badges.ml">GitHub</a>
        </aside>
      </div>
    </div>
    <a href="https://github.com/brackets-extension-badges/badges.ml" class="github-corner">
      <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="#fff" class="octo-body"></path>
      </svg>
    </a>
  `,
  trackingGA: process.env.TRACKING_GA || null
})
