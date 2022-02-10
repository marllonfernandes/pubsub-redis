const redis = require('redis')
const client = redis.createClient()
client.on('message', (channel, message) => {
    console.log(`${message} on channel: ${channel}`)
})
client.subscribe('notification')