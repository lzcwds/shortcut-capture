/**
 * Created by dy on 2019/1/11.
 *
 */
const {ipcRenderer} = require('electron')
const {getCurrentWindow,BrowserWindow} = require('electron').remote

const newWindowBtn = document.getElementById('menu_add')

newWindowBtn.addEventListener('click', (event) => {
	console.log(BrowserWindow.getAllWindows())
	let win =getCurrentWindow();
	// console.log(win)
	// ipcRenderer.sendSync('create-win', 'ping');
})
