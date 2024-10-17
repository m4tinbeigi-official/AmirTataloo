const tracks = [
    { title: "Amir Tataloo - Ye Saram Be Ma Bezan", file: "music/Amir-Tataloo-Ye-Saram-Be-Ma-Bezan.mp3" },
    { title: "آهنگ ۲", file: "music/song2.mp3" },
    { title: "آهنگ ۳", file: "music/song3.mp3" },
    // می‌توانید آهنگ‌های بیشتری اضافه کنید
];

const trackList = document.getElementById('track-list');
const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');
const trackTitle = document.getElementById('track-title');
const searchInput = document.getElementById('search');

// بارگذاری آهنگ‌ها در لیست
function loadTracks(tracks) {
    trackList.innerHTML = '';
    tracks.forEach(track => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = track.title;
        listItem.onclick = () => loadTrack(track);
        trackList.appendChild(listItem);
    });
}

// بارگذاری آهنگ
function loadTrack(track) {
    audioSource.src = track.file;
    audio.load();
    trackTitle.textContent = track.title;
    audio.play();
}

// پخش آهنگ بعدی به صورت خودکار
audio.addEventListener('ended', () => {
    const currentTrackIndex = tracks.findIndex(track => track.file === audioSource.src);
    const nextTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(tracks[nextTrackIndex]);
});

// جستجو در آهنگ‌ها
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTracks = tracks.filter(track => track.title.toLowerCase().includes(searchTerm));
    loadTracks(filteredTracks);
});

// بارگذاری اولیه آهنگ‌ها
loadTracks(tracks);
