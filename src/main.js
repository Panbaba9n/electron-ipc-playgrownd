const { app, Tray, Menu, clipboard } = require('electron');
const path = require('path');

const STACK_SIZE = 5;

function addToStack(item, stack) {
    return [item].concat(stack.length >= STACK_SIZE ? stack.slice(0, stack.length - 1) : stack)
}

function checkClipboardForChange(clipboard, onChange) {
    let cache = clipboard.readText();
    let latest;

    setInterval(() => {
        latest = clipboard.readText();
        if (latest !==cache) {
            cache = latest;
            onChange(cache);
        }
    }, 1000);
}

app.on('ready', () => {
    let stack = [];
    const tray = new Tray(path.join('src', 'assets', '16.png'));
    const contextMenu = Menu.buildFromTemplate([
        {
            label: '<Empty>',
            enabled: false
        }
    ]);

    tray.setContextMenu(contextMenu);

    checkClipboardForChange(clipboard, (text) => {
        stack = addToStack(text, stack);
        console.log('stack', stack)
    });
});