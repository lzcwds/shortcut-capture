// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
	  width: 800,
	  height: 600,
	  // transparent:true,
	  // frame:false
  })


  mainWindow.loadFile(__dirname+'/index.html')


  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// 只启动一个实例
const shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
	if (mainWindow) {
		if (mainWindow.isMinimized()) mainWindow.restore()
		mainWindow.focus()
	}
})
if (shouldQuit) {
	app.quit()
}
app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

