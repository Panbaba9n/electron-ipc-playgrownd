const { app, BrowserWindow, ipcMain } = require('electron');

const countdown = require('./countdown')

// let mainWindow;
const windows = []

app.on('ready', () => {
    [1, 2, 3].forEach(() => {
        let mainWindow = new BrowserWindow({
            height: 400,
            width: 400 
        });

        mainWindow.loadURL(`file://${__dirname}/countdown.html`);

        // countdown();

        mainWindow.on('closed', () => {
            mainWindow = null;
        })

        windows.push(mainWindow);
    })
});

ipcMain.on('countdown-start', () => {
    console.log('caught it!')
    countdown(count => {
        windows.forEach(win => {
            win.webContents.send('countdown', count)
        });
    });
})