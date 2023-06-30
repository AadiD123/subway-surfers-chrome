# Subway Surfer Multitasker Chrome Extension 🏄‍♂️

This project contains the source code for the **Subway Surfer Multitasker Chrome Extension**. The extension plays a looping video of Subway Surfers in the corner of your browser to create a more enjoyable and engaging browsing experience. 

The extension is designed just for fun to provide users with more stimulation while doing their tedious tasks. The looping video does not interfere with the functionality of the web pages and can be easily closed or opened by clicking the extension's icon.

The extension has been developed using **Manifest V3** standards as recommended by Google for all new Chrome extensions.

## 📝 Prerequisites
1. Google Chrome Browser.

## 📂 Files in this project
* `manifest.json` - This is the manifest file that the Chrome browser reads to understand the properties, permissions, and resources the extension needs.
* `background.js` - The background script is used to listen for browser events. In our case, it's used to listen for a click on the extension's icon and execute the content script.
* `content.js` - The content script is responsible for creating, modifying, or deleting the video element on the active webpage.
* `SubwaySurfers.mp4` - This is the video file that is played by the extension.

## 🚀 How to use the Subway Surfer Multitasker Chrome Extension
1. Clone the project repository on your local machine or download the project as a zip file.
2. Unzip the file if downloaded as a zip.
3. Open Google Chrome.
4. Go to the extensions page `chrome://extensions`.
5. Enable `Developer mode` by clicking the toggle switch next to `Developer mode`.
6. Click `Load unpacked` and select the project directory.
7. The extension is now installed. You can see the extension's icon on the toolbar.

To use the extension:
1. Navigate to any webpage.
2. Click on the extension's icon.
3. The Subway Surfers video will start playing in the corner of the webpage.
4. To stop the video, click the extension's icon again or click the 'x' on the video.

Please note that the extension cannot play the video on certain system pages in Chrome like the New Tab page, extensions page, and Chrome Web Store. 

**Enjoy the fun browsing experience with the Subway Surfer Multitasker Chrome Extension!** 🏄‍♂️🌐
