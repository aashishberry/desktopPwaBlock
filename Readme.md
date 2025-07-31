## PWA Install Notification Blocker Extension

This Chromium extension blocks the Progressive Web App (PWA) install notification (the "install prompt") for Webex Contact Center Agent and Supervisor Desktop. It supports both Chrome and Edge browsers.

---

### Features

- **Blocks PWA Install Prompt:** Prevents the default PWA install prompt from appearing on Webex Contact Center Agent and Supervisor Desktop.
- **Configurable:** Easily specify which DC to block the prompt for via the extension's manifest.
- **Cross-Browser:** Compatible with both Google Chrome and Microsoft Edge.

---

### Installation

1. **Clone or Download this Repository**

   ```
   git clone https://github.com/aashishberry/desktopPwaBlock.git
   ```

2. **Open Your Chromium-Based Browser**
   - **Chrome:** Go to `chrome://extensions/`
   - **Edge:** Go to `edge://extensions/`

3. **Enable Developer Mode**
   - Toggle the **Developer mode** switch.

4. **Load Unpacked Extension**
   - Click **Load unpacked** and select the above cloned directory containing this extension’s files.

---

### Configuration

1. **Specify Target Websites**

   Edit the `manifest.json` file and update the `"matches"` field under the `"content_scripts"` section to include the desktop URL where you want to block the PWA install prompt. For example:

   ```json
   "content_scripts": [
     {
       "matches": ["https://desktop.wxcc-eu1.cisco.com/*"]
     }
   ]
   ```

2. **Save Your Changes**
   - After editing `manifest.json`, reload the extension in your browser.

---

### How it Works

The extension injects a content script (`content.js`) into the Desktop app. This script looks for the `manifest` link, which triggers the PWA install notification, and removes it to block the notification.

---

### Usage

Once installed and configured, simply browse to Webex Contact Center Agent and Supervisor Desktop. The PWA install notification should no longer appear.

---

### Notes

- The extension only blocks the prompt on URLs matching the `"matches"` patterns in the manifest.
- No data is collected or sent externally; the extension runs entirely client-side.
- For changes to take effect, reload the extension in your browser after modifying the `manifest.json` file.

---

### Demo

Vidcast Link - https://app.vidcast.io/share/f928d76c-f841-4271-8181-81247b176033

---

### Improve it

You can modify the extension code as required. 

---

### Disclaimer

This is just a sample POC to demo the capability.