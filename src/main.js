const { app, BrowserWindow, Menu, globalShortcut, dialog } = require('electron');

app.on('ready', () => {
    // globalShortcut.register('CommandOrControl+Q', () => {
    //     dialog.showMessageBox({
    //       type: 'info',
    //       message: 'Success!',
    //       detail: 'You pressed the registered global shortcut keybinding.',
    //       buttons: ['OK']
    //     })
    // })

    let mainWindow = new BrowserWindow()

    mainWindow.loadURL('https://github.com')

    const template = [
        {
            label: 'Die Hard',
            submenu: [{
                label: 'About',
                click: () => {
                    console.log('clicked about')
                },
                role: 'about', // specific for IOS only https://www.electronjs.org/docs/api/menu-item#roles
            }, {
                type: 'separator'
            }, {
                label: 'Quit',
                click: () => { app.quit() },
                accelerator: 'CmdOrCtrl+W',
                role: 'close'
            }],
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
})