if (process.env.NODE_ENV === "production") {
    module.exports = require('./prod'); //require in prod.js, but also export it
} else {
    module.exports = require('./dev'); //require in dev.js, but also export it
}
