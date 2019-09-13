const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

// Globals
const DEV_URI = process.env.ELECTRON_DEV_URI

// Window object
let win

// Electron finished init & ready to create browser window
app.on('ready', createWindow)

// Quit when all windows closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  } // macOS
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  } // macOS
})

/**
 * Create the browser window object.
 */
function createWindow () {
  // Browser window
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Load html file
  // win.loadFile('index.html');
  const uri = DEV_URI || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  })
  win.loadURL(uri)

  // Dev tools
  if (DEV_URI) {
    win.webContents.openDevTools()
  }

  // Window closed
  win.on('closed', () => {
    // Dereference windows
    win = null
  })
}
