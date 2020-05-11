const { app, BrowserWindow } = require('electron');

function createWindow() {
	let win = new BrowserWindow({
		width: 600,
		height: 440,
		webPreferences: {
			nodeIntegration: true
		}
	});

	win.removeMenu();
	win.loadFile('main.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
