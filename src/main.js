const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 400,
        width: 900 
    });

    mainWindow.loadURL(`file://${__dirname}/status.html`);


    mainWindow.on('closed', () => {
        mainWindow = null;
    })
});
