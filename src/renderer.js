const { ipcRenderer } = require('electron');

document.getElementById('start').addEventListener('click', () => {
    console.log('start clicked')
    ipcRenderer.send('countdown-start');
});

ipcRenderer.on('countdown', (event, count) => {
    document.getElementById('count').innerHTML = count;
})