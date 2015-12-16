// var app = require('app');  // Module to control application life.
// var BrowserWindow = require('browser-window');  // Module to create native browser window.
//
// // Keep a global reference of the window object, if you don't, the window will
// // be closed automatically when the JavaScript object is garbage collected.
// var mainWindow = null;
//
// // Quit when all windows are closed.
// app.on('window-all-closed', function() {
//   // On OS X it is common for applications and their menu bar
//   // to stay active until the user quits explicitly with Cmd + Q
//   if (process.platform != 'darwin') {
//     app.quit();
//   }
// });
//
// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// app.on('ready', function() {
//   // Create the browser window.
//   mainWindow = new BrowserWindow({
//     width: 600,
//     height: 300,
//     // frame: false,
//     darkTheme: true,
//     title: 'NitEd',
//     'min-width': 500,
//     'min-height': 200,
//     'accept-first-mouse': true,
//     'title-bar-style': 'hidden'
//   });
//
//   // and load the index.html of the app.
//   mainWindow.loadUrl('file://' + __dirname + '/index.html');
//
//   // Open the DevTools.
//   //mainWindow.openDevTools();
//
//   // Emitted when the window is closed.
//   mainWindow.on('closed', function() {
//     // Dereference the window object, usually you would store windows
//     // in an array if your app supports multi windows, this is the time
//     // when you should delete the corresponding element.
//     mainWindow = null;
//   });
// });

// Node.js modules and those from npm
// are required the same way as always.
var os = require('os');
var app = require('remote').require('app');
var jetpack = require('fs-jetpack').cwd(app.getAppPath());
var spawn = require('child_process').spawn;

// Holy crap! This is browser window with HTML and stuff, but I can read
// here files like it is node.js! Welcome to Electron world :)
console.log(jetpack.read('package.json', 'json'));
console.log('hello world!');

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded');
  var hl = '',
      nl = spawn('nitlight', ['--fragment', '/home/jrusso/nit/examples/clock.nit']);
  nl.on('data', function (buf) { console.log(buf); hl += buf.toString() });
  nl.on('end',  function ()    { document.getElementById('text').innerHTML = hl });
  nl.on('error',function (err) { console.log(err) });
});