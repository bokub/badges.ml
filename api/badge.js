const badgen = require('badgen')

const CACHE_CONTROL = `public, max-age=60, stale-while-revalidate=86400, stale-if-error=86400`

module.exports = (req, res) => {
  res.setHeader('Cache-Control', `${CACHE_CONTROL}, s-maxage=86400`)

  if (req.headers.host.indexOf('api.') === 0) {
    return res.json({ 'subject': 'badges.ml', 'status': 'unavailable', 'color': 'grey' })
  }

  const hostStyle = req.headers.host.indexOf('flat.') === 0 ? 'flat' : undefined

  res.setHeader('Content-Type', 'image/svg+xml;charset=utf-8')
  res.send(badgen({
    subject: 'badges.ml',
    status: 'unavailable',
    color: 'grey',
    style: hostStyle
  }))
}
