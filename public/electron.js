const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

function createWindow() {
    // Create a browser window
    const window = new BrowserWindow({
        width: 350,
        height: 600,
        resizable: false,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    // Load the 'index.html' file or a url in the window
    window.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );
}

// When app is ready, create the window
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macos
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});

// Create a window if app is activated and a window doesn't already exists.
app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length == 0) {
        createWindow();
    }
});