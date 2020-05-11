# Badges.ml

[![License][license-src]][license-href]
[![Code style][standard-src]][standard-href]

> Badges for your brackets extensions

Just type  [`badges.ml`][badges.ml] to use ⚡
 
 ## Service shutdown
 
 `badges.ml` is now in a sunset phase and will soon shut down. It's been a fun few years, but all things must end.
 
 The service provided by `badges.ml` was based on a continuously running server, hosted on the *ZEIT Now 1.0 platform*, which will shut down 7th of august 2020, leaving me with 3 options:
 1. Migrate the service to Now 2.0 (would need to set up a database and rewrite everything as serverless functions)
 2. Host the service on another platform
 3. Shut down the service
 
 I personally don't have the time and energy to invest into the first two solutions, and after more than 3 years, I'd rather stop this project.
  
 Thank you to everyone who enjoyed `badges.ml`! 👍

 
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



## About

Made with ❤ from the awesome [Badgen Service][badgen-service]

[license-src]: https://flat.badgen.net/github/license/brackets-extension-badges/badges.ml
[license-href]: LICENSE.md
[standard-src]: https://flat.badgen.net/badge/code%20style/standard/pink
[standard-href]: https://standardjs.com

[badges.ml]: https://badges.ml
[brackets]: http://brackets.io
[beb]: https://github.com/brackets-extension-badges
[badgen]: https://badgen.net
[badgen-service]: https://github.com/amio/badgen-service
[now]: https://zeit.co/now