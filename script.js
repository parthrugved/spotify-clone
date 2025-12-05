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
    },
    {
        name: "life luxary",
        extesion: ".mp3",
        img: "https://images.pexels.com/photos/3944104/pexels-photo-3944104.jpeg?_gl=1*zybiqs*_ga*OTcwMDQzMDIuMTc2MzMwMDE2Nw..*_ga_8JE65Q40S6*czE3NjQ5MzM2MDEkbzIkZzEkdDE3NjQ5MzM2MDckajU0JGwwJGgw",
        artist: "Unknown"
    },
]

const container = document.querySelector('.songs-grid')

songs.forEach((item) => {
    const songPath = `songs/${item.name}${item.extesion}`;   
    const card = `
 <div class="song-card">
    <div class="album-art">
        <img onclick="playSong('${songPath}')" src="${item.img}" alt="${item.name}">
    </div>
    <div class="song-info">
        <div class="song-title">${item.name}</div>
        <div class="artist-name">${item.artist}</div>
    </div>
 </div>`;
    container.insertAdjacentHTML("beforeend", card);
});




// Hamburger menu functionality
const hamburgerMenu = document.getElementById('hamburger-menu');
const closeMenu = document.getElementById('close-menu');
const leftSidebar = document.getElementById('left-sidebar');
const mobileOverlay = document.getElementById('mobile-overlay');

function openSidebar() {
    leftSidebar.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeSidebar() {
    leftSidebar.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Open sidebar when hamburger is clicked
if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', openSidebar);
}

// Close sidebar when X button is clicked
if (closeMenu) {
    closeMenu.addEventListener('click', closeSidebar);
}

// Close sidebar when overlay is clicked
if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeSidebar);
}

// Close sidebar on window resize if it's desktop size
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeSidebar();
    }
});