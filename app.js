const { app, BrowserWindow } = require('electron');

app.whenReady()
    .then(() => {
        const win = new BrowserWindow({
            // alwaysOnTop: true,
            thickFrame: true,
            frame: false,
            // fullscreen: true,
        });
        win.loadURL('http://localhost:1234');
        // win.loadFile('dist/index.html');
        // win.webContents.openDevTools();
    });