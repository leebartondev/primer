const net = require('net')
const port = process.env.PORT ? (process.env.PORT - 100) : 3000

process.env.ELECTRON_DEV_URI = `http://localhost:${port}`

const CLIENT = new net.Socket()

let hasStarted = false
const tryConnection = () =>
  CLIENT.connect({ port: port }, () => {
    CLIENT.end()
    if (!hasStarted) {
      console.log('Starting electron...')
      hasStarted = true
      const exec = require('child_process').exec
      exec('npm run electron')
    }
  })

tryConnection()

// Try to connect every second
CLIENT.on('error', err => {
  console.log(err)
  setTimeout(tryConnection, 1000)
})
