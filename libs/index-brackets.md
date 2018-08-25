# Badges.ml

Badges for your brackets extensions

[classic](https://badges.ml)
[flat](https://flat.badges.ml)
[api](https://api.badges.ml)

## Usage

```
https://badges.ml/:subject/:extension-name
                   ───┬───  ──────┬───────
                      │           │
                      │        extension "name" as found in package.json
                      │
                 examples below
```

<div id="live-badge-examples"></div>

## Markdown

```
[![Downloads](https://badges.ml/:subject/:name)](https://badges.ml/#:name)
                                 ───┬───  ──┬─                       ─┬──
                                    │       │                         │
                                 replace  replace                  replace
```

<script>
  window.liveBadges = {
    brackets: [
      ['daily downloads', '/dd/'],
      ['weekly downloads', '/dw/'],
      ['total downloads', '/dt/'],
      ['downloads (latest)', '/dl/'],
      ['version', '/v/'],
    ],
  }
</script>

<script>
  // Update usage url for 'flat.badges.ml'
  if (window.location.hostname === 'flat.badges.ml') {
    const codes = document.querySelectorAll('pre code')
    codes.forEach(function(code) {
      code.innerText = code.innerText.replace(
           'badges.ml',
           'flat.badges.ml'
         ).replace(/\n/g, '\n     ')
    })
  }
</script>

<script type="module">
  // Render live badge examples
  import { html, render } from 'https://cdn.jsdelivr.net/npm/lit-html@0.10.2/lit-html.js'

  const genExamples = (badges, ext) => html`
    <h2 id="live-badge">Examples</h2>
    <div>${Object.entries(badges).map(([service, examples]) => html`
      <dl>
        ${examples.map(([desc, src]) => html`
          <dd>
            <b>${desc}</b>
            <i><img src=${src + ext} /></i>
            <span><a href=${src + ext}>${src + ext}</a></span>
          </dd>
        `)}
      </dl>
    `)}</div>
  `

  const extension = window.location.hash ? window.location.hash.substring(1) : 'brackets-emmet'

  render(
    genExamples(window.liveBadges, extension),
    document.querySelector('#live-badge-examples')
  )
</script>

[url-enc-href]: https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding
[style-eg-href]: /badge/color/blue/blue?style=flat
[list-eg-href]: /badge/platform/ios,macos,tvos?list=1
[icon-eg-href]: /badge/docker/v1.2.3/blue?icon=docker
