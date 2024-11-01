
function playMusic() {
    const music = document.getElementById("backgroundMusic");
    if (music.paused) {
        music.play();
        alert("Musik latar diputar. Nikmati suasananya!");
    } else {
        music.pause();
        alert("Musik latar dihentikan.");
    }
}
