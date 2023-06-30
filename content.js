// Check if the videoElement already exists in the page
var videoElement = document.getElementById('subwaySurfersVideo');

// If the videoElement exists, remove it
if (videoElement) {
    videoElement.parentNode.removeChild(videoElement);
} else {
    // If not, create it
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

        // Create close button
        var closeButton = document.createElement('button');
        closeButton.style.position = 'fixed';
        closeButton.style.right = '10px';
        closeButton.style.top = '10px';
        closeButton.style.zIndex = '9999999';
        closeButton.textContent = 'X';
        closeButton.onclick = function () {
            videoElement.parentNode.removeChild(videoElement);
            this.parentNode.removeChild(this);
        };
        document.body.appendChild(closeButton);
    } catch (error) {
        // Do nothing, or log a custom error message if needed
    }
}
