// Gift open
const giftBox = document.getElementById('gift-box');
const giftScreen = document.getElementById('gift-screen');
const mainContent = document.getElementById('main-content');

giftBox.addEventListener('click', () => {
    giftScreen.style.display = 'none';
    mainContent.style.display = 'block';
});

// Secret message
const secretButton = document.getElementById('secret-button');
const secretOverlay = document.getElementById('secret-overlay');
const secretClose = document.getElementById('secret-close');
const secretAudio = document.getElementById('secret-audio');

secretButton.addEventListener('click', () => {
    secretOverlay.style.display = 'flex';
    secretAudio.play().catch(() => {});
});

secretClose.addEventListener('click', () => {
    secretOverlay.style.display = 'none';
    secretAudio.pause();
});
// VIDEO 1 play button
const vid1 = document.getElementById("vid1");
const playBtn1 = document.getElementById("playVid1");

playBtn1.addEventListener("click", () => {
    vid1.play();
    playBtn1.style.display = "none"; // hide play button after starting
});


// VIDEO 2 play button
const vid2 = document.getElementById("vid2");
const playBtn2 = document.getElementById("playVid2");

playBtn2.addEventListener("click", () => {
    vid2.play();
    playBtn2.style.display = "none"; // hide play button after starting
});
