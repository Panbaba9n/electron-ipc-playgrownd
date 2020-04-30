const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 0,
        heigth: 0,
        resizeable: false,
        frame: false
    });

    mainWindow.openDevTools();

    mainWindow.loadURL(`file://${__dirname}/capture.html`)

    mainWindow.on('close', () => {
        mainWindow = null;
    });

    globalShortcut.register('Ctrl+Alt+S', () => {
        mainWindow.webContents.send('capture', app.getPath('pictures'));
    })
});