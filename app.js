'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let windows = [];

function createMainWindow () {
  const mainWindow = new BrowserWindow({width: 800, height: 600});
  windows.push(mainWindow)
  mainWindow.loadURL('file://' + __dirname + '/main.html');
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    windows = windows.filter(function (w) {
      return w && w != mainWindow;
    });
  });
}

app.on('ready', createMainWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (windows.isEmpty) {
    createMainWindow();
  }
});
