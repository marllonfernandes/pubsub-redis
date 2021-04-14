const redis = require('redis')
const client = redis.createClient()
var count = 10

async function start() {
    for (let i = 0; i < count; i++) {
        await Timeout(5000)
        client.publish('notification', JSON.stringify({ message: `Hello World ${(i+1).toString()}` }), () => {
            // process.exit(0)
        })

    }
}

function Timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
start()