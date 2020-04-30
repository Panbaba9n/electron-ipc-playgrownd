const { app, Tray, Menu } = require('electron');
const path = require('path');



app.on('ready', () => {
    const tray = new Tray(path.join('src', 'assets', '16.png'));
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Wow',
            click: () => console.log('wow'),
        },
        {
            label: 'Awesome',
            click: () => console.log('awesome'),
        }
    ]);

    tray.setContextMenu(contextMenu);
    tray.setToolTip('My great app'); // works on IOS
});