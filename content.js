// Check if the videoElement already exists in the page
var videoElement = document.getElementById('subwaySurfersVideo');

// If not, create it
if (!videoElement) {
    try {
        videoElement = document.createElement('video');
        videoElement.id = 'subwaySurfersVideo';
        videoElement.style.position = 'fixed';
        videoElement.style.width = '300px';
        videoElement.style.height = 'auto';
        videoElement.style.right = '10px';
        videoElement.style.top = '10px';
        videoElement.style.zIndex = '999999';
        videoElement.autoplay = true;
        videoElement.loop = true;
        videoElement.muted = true;
        videoElement.src = chrome.runtime.getURL('SubwaySurfers.mp4');
        document.body.appendChild(videoElement);
    } catch (error) {
        // Do nothing, or log a custom error message if needed
    }
}
