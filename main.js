const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      contextIsolation: true,
    },
  });

  // ✅ Correct path
  //win.loadFile(path.join(__dirname, 'dist/my-first-angular-project/browser/index.html'));
    const indexPath = path.join(__dirname, 'dist/browser/index.html');
    win.loadFile(indexPath);
}

app.whenReady().then(createWindow);
