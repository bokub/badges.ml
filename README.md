# Badges.ml

[![Response time][response-src]][response-href]
[![Uptime][uptime-src]][uptime-href]
[![License][license-src]][license-href]
[![Code style][standard-src]][standard-href]

> Badges for your brackets extensions

Just type  [`badges.ml`][badges.ml] to use ⚡
 
## The badges.ml story

A few years ago, when I was making extensions for the [Brackets IDE][brackets], I was shocked to learn that
Adobe did not provide **any kind** of download statistics, even to the extension developers.
 
However, I discovered there was an unofficial way to retrieve some statistics by downloading the whole registry,
which is a huge JSON file 📜

```sh
curl https://brackets-registry.aboutweb.com/registryList -H "Accept: application/json" -k
```

Not only I wanted stats, but I wanted badges, and I wanted other people to have them too. That's why I created a badge
provider in PHP, and later, another one in Node.js. There was a lot of [crappy code][beb], but it worked quite well.

When I heard about [Badgen][badgen] for the first time, I immediately knew it could replace my badge
provider efficiently, provide both classic and flat badges, as well as a JSON API.

However, the role of Badgen is to *generate badges*, not to *download / parse / save* the brackets 
registry, so I forked the [Badgen Service][badgen-service], transformed it into [`badges.ml`][badges.ml], and
hosted it on [Now][now].


## Retro-compatibility

This new badge provider is still retro-compatible with the old badge provider URLs:
 
|                    Old URL                   |             New URL            |
|:--------------------------------------------:|:------------------------------:|
|`badges.ml/brackets-beautify/day.svg         `|`badges.ml/dd/brackets-beautify`|
|`badges.ml/brackets-beautify/week.svg        `|`badges.ml/dw/brackets-beautify`|
|`badges.ml/brackets-beautify/total.svg       `|`badges.ml/dt/brackets-beautify`|
|`badges.ml/brackets-beautify/last-version.svg`|`badges.ml/dl/brackets-beautify`|
|`badges.ml/brackets-beautify/version.svg     `|`badges.ml/v/brackets-beautify `|


## Deploy to Now

Deploy your own instance of `badges.ml` to [Now][now] with one single command:
```
now bokub/badges.ml
```


## About

Made with ❤ from the awesome [Badgen Service][badgen-service]

[uptime-src]: https://flat.badgen.net/uptime-robot/week/m778749989-833506c8f5b168db2f169307?label=past%20week%20uptime
[uptime-href]: https://stats.uptimerobot.com/r8QDWt63B/778749989
[response-src]: https://flat.badgen.net/uptime-robot/response/m778749989-833506c8f5b168db2f169307
[response-href]: https://stats.uptimerobot.com/r8QDWt63B/778749989
[license-src]: https://flat.badgen.net/github/license/bokub/badges.ml
[license-href]: LICENSE.md
[standard-src]: https://flat.badgen.net/badge/code%20style/standard/pink
[standard-href]: https://standardjs.com

[badges.ml]: https://badges.ml
[brackets]: http://brackets.io
[beb]: https://github.com/brackets-extension-badges
[badgen]: https://badgen.net
[badgen-service]: https://github.com/amio/badgen-service
[now]: https://zeit.co/now