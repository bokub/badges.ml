const micro = require('micro')
const { router, get } = require('micro-fork')
const serveStatic = require('./libs/serve-static.js')
const serveIndex = require('./libs/serve-index.js')
const liveHandlers = require('./libs/live-handlers.js')
const serveApi = require('./libs/serve-api.js')
const raven = require('./libs/raven.js')

const indexHandler = (req, res) => {
  if (req.headers.host === 'badgen.now.sh') {
    res.setHeader('Location', 'https://badgen.net')
    micro.send(res, 301)
  } else {
    serveIndex(req, res)
  }
}

const main = router()(
  get('/', indexHandler),
  get('/static/*', serveStatic),
  ...liveHandlers
)

module.exports = (req, res) => {
  switch (req.headers.host) {
    case 'api.badges.ml':
    case '127.0.0.1:3000':
      return serveApi(req, res)
    default:
      return main(req, res)
  }
}

const autoRun = () => {
  if (require.main === module) {
    micro(module.exports).listen(3000)
  }
}

raven ? raven.context(autoRun) : autoRun()
