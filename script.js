let currentAudio = null;

function playSong(songPath) {
    // Stop currently playing audio if any
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Create new audio element and play
    currentAudio = new Audio(songPath);
    currentAudio.play().catch(error => {
        console.error("Error playing audio:", error);
    });
}

const songs = [
    {
        name: "life luxary",
        extesion: ".mp3",
        img: "https://images.pexels.com/photos/3944104/pexels-photo-3944104.jpeg?_gl=1*zybiqs*_ga*OTcwMDQzMDIuMTc2MzMwMDE2Nw..*_ga_8JE65Q40S6*czE3NjQ5MzM2MDEkbzIkZzEkdDE3NjQ5MzM2MDckajU0JGwwJGgw",
        artist: "Unknown"
    }
]

const container = document.querySelector('.right')

songs.forEach((item) => {
    const songPath = `songs/${item.name}${item.extesion}`;   
    const card = `
 <div class="song-card">
    <div class="album-art">
        <img onclick="playSong('${songPath}')" src="${item.img}" alt="${item.name}">
    </div>
 </div>`;
    container.insertAdjacentHTML("beforeend", card);
});