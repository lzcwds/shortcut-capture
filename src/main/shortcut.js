/**
 * Created by dy on 2019/1/11.
 *
 */
const path = require('path')
const {ipcMain,BrowserWindow}  = require('electron')
let win
ipcMain.on('create-win',function () {
	const modalPath = path.join('file://', __dirname, '../sections/modal.html')
	win = new BrowserWindow({
		width: 400,
		height: 320,
		// fullscreen:true,
		transparent:true,
		backgroundColor :'#FFFFFF',
		opacity:0.2,
		// frame:false
	})
	win.webContents.openDevTools()
	win.on('close', () => { win = null })
	win.loadURL(modalPath)
	win.show();
})
ipcMain.on('win-show',function () {
	win.show();
})