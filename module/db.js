const mongoose = require('mongoose')

function dbinit() {
  mongoose.connect(process.env.url_mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // reconnectTries: 30,
    keepAlive: true,
    // reconnectInterval: 500, // Reconnect every 500ms
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
  })
}

module.exports ={
  dbinit
}