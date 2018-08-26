const serveMarked = require('serve-marked')

module.exports = serveMarked('libs/index-brackets.md', {
  title: 'Badges.ml - badges for your brackets extensions',
  preset: 'merri',
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

    pre, code { background-color: #EEF2F8; font-weight: 400 }
    pre > code { padding: 0 }

    li { vertical-align: top; font: 16px/32px sans-serif; color: #777 }
    li code { padding: 0.3em 0.5em; display: pre; color: #333 }
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
            Hosted on <a href="https://zeit.co/now">Now Cloud</a>
          </p>
        </segment>
        <aside>
          <a href="https://stats.uptimerobot.com/r8QDWt63B/778749989">Status</a>
          <a href="https://github.com/bokub/badges.ml">GitHub</a>
        </aside>
      </div>
    </div>
  `,
  trackingGA: process.env.TRACKING_GA || null
})
