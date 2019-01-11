/**
 * Created by dy on 2019/1/11.
 *
 */
const {BrowserWindow} = require('electron').remote
const path = require('path')

const newWindowBtn = document.getElementById('menu_add')

newWindowBtn.addEventListener('click', (event) => {
	const modalPath = path.join('file://', __dirname, '../../sections/windows/modal.html')
	let win = new BrowserWindow({ width: 400, height: 320 })

	win.on('close', () => { win = null })
	win.loadURL(modalPath)
	win.show()
})
