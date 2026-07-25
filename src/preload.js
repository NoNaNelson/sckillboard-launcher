/**
 * preload.js — Secure IPC bridge
 * Exposes ONLY specific functions to the renderer via contextBridge.
 * The renderer never touches Node.js directly.
 */

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('vkb', {
  // Config
  getConfig:      ()      => ipcRenderer.invoke('get-config'),
  saveConfig:     (cfg)   => ipcRenderer.send('save-config', cfg),
  getQuotes:      ()      => ipcRenderer.invoke('get-quotes'),

  // Splash
  login:          (creds)  => ipcRenderer.invoke('login', creds),
  logout:         ()       => ipcRenderer.invoke('logout'),
  launch:         (handle) => ipcRenderer.send('launch', handle),
  bootComplete:   ()       => ipcRenderer.send('boot-complete'),
  acceptEula:     ()       => ipcRenderer.send('eula-accept'),
  declineEula:    ()       => ipcRenderer.send('eula-decline'),
  openExternal:   (url)    => ipcRenderer.send('open-external', url),

  // Main window
  checkServer:    ()      => ipcRenderer.invoke('check-server'),
  startTracking:  (path)  => ipcRenderer.send('start-tracking', path),
  stopTracking:   ()      => ipcRenderer.send('stop-tracking'),
  clearFeed:      ()      => ipcRenderer.send('clear-feed'),
  browseLog:      ()      => ipcRenderer.send('browse-log'),
  resyncProfiles: ()      => ipcRenderer.invoke('resync-profiles'),

  // Audio
  setVolume: (v) => ipcRenderer.send('set-volume', v),
  setMute:   (m) => ipcRenderer.send('set-mute',   m),

  // Updates (electron-updater)
  checkForUpdates: () => ipcRenderer.send('update:check'),
  downloadUpdate:  () => ipcRenderer.send('update:download'),
  installUpdate:   () => ipcRenderer.send('update:install'),

  // Events from main → renderer
  on: (channel, fn) => {
    const allowed = [
      'log', 'status', 'kill-count', 'log-path-selected',
      'sc-status', 'last-kill-handle', 'tracking-state', 'update-status',
    ]
    if (allowed.includes(channel)) {
      ipcRenderer.on(channel, (e, ...args) => fn(...args))
    }
  }
})
