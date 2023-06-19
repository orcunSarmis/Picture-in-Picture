const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// propmt to select media stream, pass to video element play
async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.onplay();
		}
	} catch (error) {
		console.log('hoppa, err here:', error);
	}
}

button.addEventListener('click', async () => {
	// diasble btn
	button.disabled = true;
	// start
	await videoElement.requestPictureInPicture();
	// reset btn
	button.disabled = false;
});

selectMediaStream();