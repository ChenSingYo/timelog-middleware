function timelog (req, res, next) {
  const timeNow = new Date()
  const fullDate = `${timeNow.getFullYear()}-${timeNow.getMonth() + 1}-${timeNow.getDate()}`
  const fullTime = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`
  console.log(`${fullDate} ${fullTime} | ${req.method} from ${req.originalUrl}`)
  next()
}

module.exports = timelog
