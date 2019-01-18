import { app, BrowserWindow ,ipcMain,globalShortcut} from 'electron';
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer';
import { enableLiveReload } from 'electron-compile';

let mainWindow;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) enableLiveReload();

const createWindow = async () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadURL(`file://${__dirname}/../render/index.html`);

  if (isDevMode) {
    await installExtension(VUEJS_DEVTOOLS);
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};
let shortcutWin =null;
let createBlack = ()=>{
	shortcutWin = new BrowserWindow({
		width: 800,
		height: 600,
		frame:false,
	})
	shortcutWin.loadURL(`file://${__dirname}/../render/shortcut/shortcut.html`);
	shortcutWin.on('closed',()=>{
		shortcutWin = null;
	})
}
ipcMain.on('start-capture',(win,data)=>{
	console.log(data.cmd);
	switch(data.cmd){
		case 'start':
			createBlack();
			break;
	}
})
app.on('ready', ()=>{
	globalShortcut.register('Escape', () => {
		if(shortcutWin){
			shortcutWin.close();
		}
	})
	createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});


