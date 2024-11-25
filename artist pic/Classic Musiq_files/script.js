// Sample songs data
const songs = [
  { title: "Go Gaaga", artist: "Afriyie Wutah ft Sarkodie", genre: "Hip Life", albumArt: "album art/go gaaga cover pic.jpg", url: "classic songs/Afriyie Wutah Go Gaaga ft Sarkodie.mp3" },
  { title: "Kilos Milos", artist: "Black Sherif", genre: "Hip Hop", albumArt: "album art/the vilian i never was cover pic.jpeg", url: "classic songs/Black Sherif Kilos Milos.mp3" },
  { title: "favorite story", artist: "King Promise ft Sarkodie ft Olivetheboy", genre: "Afrobeat", albumArt: "album art/favorite song king promise cover pic.webp", url: "classic songs/King Promise Favourite Story ft Sarkodie &Olivetheboy.mp3" },
  { title: "Atia", artist: "Epixode ft Abiana", genre: "High Life", albumArt: "cover pics/Epixode-Atia-Folk-Rendition-Cover.jpg", url: "classic songs/Abiana ft botri on Atia by Epixode folk rendition.mp3" },
  { title: "JeJe", artist: "Adina", genre: "Hip Life", albumArt: "cover pics/Adina Jeje cover pic.jpeg", url: "classic songs/Adina Jeje.mp3" },
  { title: "Bestie", artist: "Abochi", genre: "High Life", albumArt: "cover pics/Abochie bestie cover pic.jpeg", url: "classic songs/Abochi Bestie.mp3" },
  { title: "Take care of you", artist: "Adina ft Stonebwoy ", genre: "Hip Life", albumArt: "cover pics/Adina take care cover pic.jpeg", url: "classic songs/Adina Take care of you.mp3" },
  { title: "Why", artist: "Adina", genre: "Hip Hop", albumArt: "cover pics/Adina why cover pic.jpeg", url: "classic songs/Adina Why.mp3" },
  { title: "Posti me", artist: "Akwaboah", genre: "Afrobeat", albumArt: "cover pics/Akwaboah posti me cover pic.jpeg", url: "classic songs/Akwaboah posti me.mp3" },
  { title: "Alreday", artist: "Beyonce ft Shatta Wale", genre: "Afrobeat", albumArt: "cover pics/Beyouce Already cover pic.jpeg", url: "classic songs/Beyonce ft Shatta Wale Already.mp3" },
  { title: "Up and awake", artist: "Cojo Cue ftKwesi Arthur", genre: "Hip Hop", albumArt: "cover pics/up and awake cojo cue cover pic.jpeg", url: "classic songs/Up & Awake kwesi Arthur.mp3" },
  { title: "Allowed", artist: "Amg Armani ft quamina Mp ft Medikal", genre: "Afrobeat", albumArt: "cover pics/Amg Armani Allowed cover pic.jpeg", url: "classic songs/Amg Armani Allowed ft Quamina MP & Medikal.mp3" },
  { title: "Lyrical Josephine", artist: "Amerado", genre: "Hip Hop", albumArt: "cover pics/Amerado Lyrical Josephine.jpeg", url: "classic songs/Amerado Lyrical Josephine.mp3" },
  { title: "Kyibom free hype", artist: "Amerado", genre: "Hip Hop", albumArt: "cover pics/Amerado kyibom cover pic.jpeg", url: "classic songs/Amerado Kyibom free hype.mp3" },

];

// To track the current song
let currentSongIndex = 0;

// Function to display featured songs
function displayFeaturedSongs() {
  displaySongs(songs);
}

// Function to filter and display songs based on the selected artist
function filterByArtist(artist) {
  const filteredSongs = artist === 'All' ? songs : songs.filter(song => song.artist.includes(artist));
  displaySongs(filteredSongs);
  updateActiveArtistButton(artist);
}

// Function to update the active class on artist buttons
function updateActiveArtistButton(artist) {
  const artistElements = document.querySelectorAll('#artist-buttons button, #artist-buttons .artist-link');
  artistElements.forEach(element => element.classList.remove('active'));

  const activeElement = Array.from(artistElements).find(element => {
    const img = element.querySelector('img');
    return img ? img.alt === artist : element.textContent.trim() === artist;
  });
  
  if (activeElement) {
    activeElement.classList.add('active');
  }
}

// Function to display the filtered or searched songs
function displaySongs(filteredSongs) {
  const songContainer = document.getElementById('featured-songs');
  songContainer.innerHTML = '';

  filteredSongs.forEach(song => {
    const songElement = document.createElement('div');
    songElement.classList.add('song-item');
    songElement.innerHTML = `
      <img data-src="${song.albumArt}" alt="Album Art" class="lazy-img">
      <h3>${song.title}</h3>
      <p>${song.artist}</p>
      <button onclick="playSong('${song.url}', '${song.title}', '${song.artist}', '${song.albumArt}')">Play</button>
      <a href="${song.url}" download class="download-button">Download</a>
    `;
    songContainer.appendChild(songElement);
  });

  lazyLoadImages(); // Call lazy loading after displaying songs
}

// Function to lazy load images
function lazyLoadImages() {
  const lazyImages = document.querySelectorAll('.lazy-img');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // Set the src from data-src
        img.classList.remove('lazy-img'); // Remove the lazy-img class
        observer.unobserve(img); // Stop observing the loaded image
      }
    });
  });

  lazyImages.forEach(img => {
    imageObserver.observe(img); // Start observing each lazy image
  });
}

// Function to filter songs by genre
function filterByGenre(genre) {
  const filteredSongs = genre === 'All' ? songs : songs.filter(song => song.genre === genre);
  displaySongs(filteredSongs);
}

// Function to search songs by title or artist
function searchSongs() {
  const searchQuery = document.getElementById('search').value.toLowerCase();
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchQuery) ||
    song.artist.toLowerCase().includes(searchQuery)
  );
  displaySongs(filteredSongs);
}

// Function to play a selected song
function playSong(songUrl, title, artist, albumArt) {
  const audioPlayer = document.getElementById('audio-player');
  const songTitle = document.getElementById('song-title');
  const songArtist = document.getElementById('song-artist');
  const albumArtImg = document.getElementById('album-art');

  audioPlayer.src = songUrl;
  songTitle.textContent = title;
  songArtist.textContent = artist;
  albumArtImg.src = albumArt; // You can also lazy load this if you want
  
  audioPlayer.play();
}

// Media Player Controls
const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

// Function to handle play/pause
playPauseButton.addEventListener('click', function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playPauseButton.textContent = 'Play';
  }
});

// Function to play previous song
prevButton.addEventListener('click', function() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  const song = songs[currentSongIndex];
  playSong(song.url, song.title, song.artist, song.albumArt);
});

// Function to play next song
nextButton.addEventListener('click', function() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  const song = songs[currentSongIndex];
  playSong(song.url, song.title, song.artist, song.albumArt);
});

// Initialize the page
window.onload = function() {
  displayFeaturedSongs();
};

// Function to add the active class on touch for mobile devices
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('touchstart', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      setTimeout(() => {
        window.location.href = link.href;
      }, 200);
    });
  });
});

// Add an event listener to the search input to filter songs as the user types
document.getElementById('search').addEventListener('input', searchSongs);

// Function to toggle between dark and light mode
function toggleTheme() {
  const body = document.body;
  const songItems = document.querySelectorAll('.song-item');
  const buttons = document.querySelectorAll('button');

  // Toggle dark mode class on body
  body.classList.toggle('dark-mode');

  // Toggle dark mode class on song items
  songItems.forEach(item => {
    item.classList.toggle('dark-mode');
  });

  // Toggle dark mode class on buttons
  buttons.forEach(button => {
    button.classList.toggle('dark-mode');
  });

  // Save the current theme in localStorage
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}

// Function to apply saved theme on page load
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    const songItems = document.querySelectorAll('.song-item');
    const buttons = document.querySelectorAll('button');

    songItems.forEach(item => {
      item.classList.add('dark-mode');
    });

    buttons.forEach(button => {
      button.classList.add('dark-mode');
    });
  }
}

// Apply saved theme on page load
window.onload = function() {
  applySavedTheme();
  displayFeaturedSongs(); // Ensure this is called after applying the theme
};

// Add an event listener to the toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
