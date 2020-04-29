const { app, BrowserWindow, ipcMain } = require('electron');

const countdown = require('./countdown')

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 400,
        width: 400 
    });

    mainWindow.loadURL(`file://${__dirname}/countdown.html`);

    // countdown();

    mainWindow.on('closed', () => {
        mainWindow = null;
    })
});

ipcMain.on('countdown-start', () => {
    console.log('caught it!')
    countdown(count => {
        mainWindow.webContents.send('countdown', count)
    });
})