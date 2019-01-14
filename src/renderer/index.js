/**
 * Created by dy on 2019/1/11.
 *
 */
const {ipcRenderer} = require('electron')
// const {} = require('electron').remote

const newWindowBtn = document.getElementById('menu_add')

newWindowBtn.addEventListener('click', (event) => {
	ipcRenderer.sendSync('create-win', 'ping');
})
