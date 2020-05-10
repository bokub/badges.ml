const homepage = require('../libs/serve-index')

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.send(homepage)
}
