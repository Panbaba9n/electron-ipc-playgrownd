const fs = require('fs');
const exec = require('child_process').exec;
const os = require('os');

function isDir(dir) {
    try {
        return fs.lstatSync(dir).isDirectory();
    } catch (e) {
        return false;
    }
}

function checkGitStatus(dir) {
    exec('git status', {
        cwd: dir
    }, (err, stdout, stderr) => {
        console.log('err', err);
        console.log('stdout', stdout);
        console.log('stderr', stderr);

        if (err) return setStatus('unknown');

        if (/nothing to commit/.test(stdout)) return setStatus('clean');

        // ~/www/dev.electron-ipc-demo/
        return setStatus('dirty');
    });
}

function formatDir(dir) {
    return /^~/.test(dir)
        ? os.homedir() + dir.substr(1).trim()
        : dir.trim();
}

function removeStatus() {
    const el = document.getElementById('status');
    el.classList.remove('unknouwn', 'clean', 'dirty');
    return el;
}

function setStatus(status) {
    const el = removeStatus();
    el.classList.add(status);
}

let timer;

document.getElementById('input').addEventListener('keyup', event => {
    removeStatus();
    clearTimeout(timer);
    timer = setTimeout(() => {
        const dir = formatDir(event.target.value);
        if (isDir(dir)) {
            checkGitStatus(dir);
        }
    }, 500);
    
})