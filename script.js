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
  { title: "Kyibom free hype", artist: "Amerado", genre: "Hip Hop", albumArt: "cover pics/Amerado Lyrical Josephine.jpeg", url: "classic songs/Amerado Lyrical Josephine.mp3" },
  { title: "Life", artist: "Bisa Kdei ft Patoranking", genre: "Hip Life", albumArt: "cover pics/bisa kdei life cover pic.jpeg", url: "classic songs/Bisa Kdei ft Patoranking Life.mp3" },
  { title: "Ade Akye", artist: "Black Sherif", genre: "Hip Hop", albumArt: "cover pics/Black Sherif Ade Akye.jpg", url: "classic songs/Black Sherif Ade Akye.mp3" },
  { title: "Money", artist: "Black Sherif", genre: "Hip Hop", albumArt: "cover pics/Black sherif money cover pic.jpeg", url: "classic songs/Black Sherif money.mp3" },
  { title: "Chochomucho", artist: "Bless ft Kofi Kinaata", genre: "High Life", albumArt: "cover pics/Bless chochomucho cover pic.jpeg", url: "classic songs/Bless ft Kofi Kinaata Chochomucho.mp3" },
  { title: "Felony", artist: "Ckay", genre: "Afrobeat", albumArt: "cover pics/Ckay Felony .jpg", url: "classic songs/Ckay Felony.mp3" },
  { title: "Destiny", artist: "Black Sherif", genre: "Hip Hop", albumArt: "cover pics/Black Sherif Destiny.jpg", url: "classic songs/Black Sherif Destiny.mp3" },
  { title: "Moonlight", artist: "Bless", genre: "High Life", albumArt: "cover pics/Bless moonlight cover pic.jpeg", url: "classic songs/Bless Moonlight prod by King Dee.mp3" },
  { title: "Love wantiti", artist: "Ckay", genre: "Afrobeat", albumArt: "cover pics/ckay love wantinti cover pic.webp", url: "classic songs/Ckay Love Nwantintin Remix ft Joeboy &Kuami Eugene.mp3" },
  { title: "Money Remix", artist: "Black Sherif", genre: "Hip Hop", albumArt: "cover pics/Black Sherif money Remix pic.jpg", url: "classic songs/Black Sherif Money remix ft Armani & Tulenkey.mp3" },
  { title: "Bie gya", artist: "Criss Waddle ft Stonebwoy", genre: "Hip Life", albumArt: "cover pics/Criss Waddle bie gya.jpg", url: "classic songs/criss Waddle bie gya ft Stonebwoy.mp3" },
  { title: "King Kong", artist: "Criss waddle ft Kwesi Arthur", genre: "Hip Hop", albumArt: "cover pics/Criss waddle ft Kwesi Arthur King Kong.jpeg", url: "classic songs/Criss Waddle ft Kwesi Arthur King Kong.mp3" },
  { title: "Green Light", artist: "Cuppy ft Tekno", genre: "Afrobeat", albumArt: "cover pics/Cuppy ft Tekno Green Light.jpg", url: "classic songs/Cuppy ft Tekno Green Light.mp3" },
  { title: "Dont let me fall", artist: "Fantana ft Freda Ryhmz", genre: "Hip Life", albumArt: "cover pics/Danny beat Dont let me fall ft Fantana.jpeg", url: "classic songs/Dany Beat Don't let me fall ft Fantana & Freda Rhymz.mp3" },
  { title: "Y3 B3 Sei Wiase ", artist: "DarkoVibes ft Stonebwoy", genre: "Afrobeat", albumArt: "artist pic/DarkoVibes.jpeg", url: "classic songs/DarkoVibes Inna Song Remix ft Stonebwoy.mp3" },
  { title: " Letter To You", artist: "Davido", genre: "Afrobeat", albumArt: "cover pics/Davido 2020 Letter To You.jpg", url: "classic songs/Davido 2020 Letter To You.mp3" },
  { title: "Assurance", artist: "Davido", genre: "Afrobeat", albumArt: "cover pics/Davido Assurance.jpg", url: "classic songs/Davido Assurance.mp3" },
  { title: "FEM", artist: "Davido", genre: "Afrobeat", albumArt: "cover pics/Davido Fem.jpg", url: "classic songs/Davido FEM.mp3" },
  { title: "Shopping Spree", artist: "Davido ft Chris Brown & Young Thug", genre: "Afrobeat", albumArt: "cover pics/Davido ft Chris Brown & Young Thug.jpg", url: "classic songs/Davido ft Chris Brown & Young Thug Shopping Fee.mp3" },
  { title: "Holy Grounds", artist: "Davido ft Nicki Minaj", genre: "Afrobeat", albumArt: "cover pics/Davido ft Nicki Minaj Holly Grounds.jpeg", url: "classic songs/Davido ft Nicki Minaj Holy Ground.mp3" },
  { title: "Risky", artist: "Davido ft Popcan", genre: "Afrobeat", albumArt: "cover pics/Davido ft Popcan.jpeg", url: "classic songs/Davido ft Popcan.mp3" },
  { title: "Jowo", artist: "Davido", genre: "Afrobeat", albumArt: "cover pics/Davido Jowo.jpg", url: "classic songs/Davido Jowo.mp3" },
  { title: "Eish", artist: "Dope nation", genre: "Afrobeat", albumArt: "cover pics/Dope Nation eish .jpeg", url: "classic songs/DopeNation Eish Prod By B2.mp3" },
  { title: "Thank God", artist: "Dope nation", genre: "Afrobeat", albumArt: "cover pics/E.L-ft.-Kwesi-Arthur-Collect.jpg", url: "classic songs/Dopenation Thank God ft Kofi Kinaata.mp3" },
  { title: "Collect", artist: "EL ft Kwesi Arthur", genre: "Afrobeat", albumArt: "cover pics/E.L-ft.-Kwesi-Arthur-Collect.jpgg", url: "classic songs/E L ft Kwesi Arthur.mp3" },
  { title: "Away", artist: "Eazi ft Medikal", genre: "Afrobeat", albumArt: "cover pics/Eazi away ft Medikal.jpg", url: "classic songs/Eazy Away Ft Medikal.mp3" },
  { title: "Odo", artist: "Eazi", genre: "Afrobeat", albumArt: "cover pics/Eazi Odo.jpg", url: "classic songs/Eazy Odo.mp3" },
  { title: "Uju", artist: "Medikal ft Endy", genre: "Afrobeat", albumArt: "cover pics/Endy ft Medikal Uju.jpeg", url: "classic songs/Endy Ft Medikal Uju.mp3" },
  { title: "Argument done", artist: "Eno Barony", genre: "Hip Pop", albumArt: "cover pics/Eno Barony Argument Done.jpeg", url: "classic songs/Eno Barony Argument done Ft Sista Afia Diss.wav" },
  { title: "Enough is enoughh", artist: "Eno Barony ft Wendy Shay", genre: "Afrobeat", albumArt: "cover pics/EnoBarony enough is enough ft Wendy Shay.jpeg", url: "classic songs/Eno Barony Enough is Enough Ft Wendy Shay.mp3" },
  { title: "God is a woman", artist: "Eno Barony ft Efya", genre: "Afrobeat", albumArt: "cover pics/Eno Barony ft Efya God is a woman.jpg", url: "classic songs/Eno Barony God is a woman Ft Efya.mp3" },
  { title: "P3p33p3", artist: "Epixode ft Medikal", genre: "Hip Life", albumArt: "cover pics/Epixode ft Mediakl P3p33p3 .jpg", url: "classic songs/Epixode Ft Medikal p3p3p3.mp3" },
  { title: "Chairman", artist: "Fameye ft Joey B", genre: "Hip Life", albumArt: "cover pics/Fameye Chairman ft Joey B.jpg", url: "classic songs/Fameye chairman ft Joey B.mp3" },
  { title: "Destiny", artist: "Fameye", genre: "Hip Life", albumArt: "cover pics/Fameye Destiny.jpeg", url: "classic songs/Fameye Destiny.mp3" },
  { title: "Long Life", artist: "Fameye ft Kwesi Arthur", genre: "Afrobeat", albumArt: "cover pics/Fameye ft Kwesi Arthur long life.jpeg", url: "classic songs/Fameye long life Ft Kwesi Arthur.mp3" },
  { title: "Mati", artist: "Fameye", genre: "Afrobeat", albumArt: "cover pics/Fameye Mati.jpg", url: "classic songs/Fameye Mati.mp3" },
  { title: "Nothing I Get", artist: "Fameye", genre: "Hip Life", albumArt: "cover pics/Fameye Nothing i get.jpg", url: "classic songs/Fameye Nothing I Get.mp3" },
  { title: "Obolo", artist: "Fameye ft Mr Eazi", genre: "Hip Life", albumArt: "cover pics/Fameye Obolo.jpg", url: "classic songs/Fameye OBOLO ft Mr Eazi.mp3" },
  { title: "Praise", artist: "Fameye", genre: "Afrobeat", albumArt: "cover pics/Fameye Praise.jpg", url: "classic songs/Fameye Praise.mp3" },
  { title: "Self Help", artist: "Fameye", genre: "Afrobeat", albumArt: "cover pics/Fameye Self Help.jpg", url: "classic songs/fameye Self Help.mp3" },
  { title: "Flash", artist: "Tekno", genre: "Afrobeat", albumArt: "cover pics/Flash Betta ft Tekno.webp", url: "classic songs/Flash Betta ft Tekno.mp3" },
  { title: "Fire", artist: "Joeboy ft King Promise", genre: "Afrobeat", albumArt: "cover pics/Davido sunlight.jpg", url: "classic songs/GuiltyBeatz Fire ft Joeboy &  King Promise.mp3" },
  { title: "Genging", artist: "Mr Eazi dt Medikal", genre: "Afrobeat", albumArt: "cover pics/Davido sunlight.jpg", url: "classic songs/GuiltyBeatz Mr Eazi ft Medikal Genging.mp3" },
  { title: "Forever", artist: "Gyakie", genre: "Afrobeat", albumArt: "cover pics/Davido sunlight.jpg", url: "classic songs/Gyakie Forever.mp3" },
  { title: "Give me love", artist: "Jay Hover ft Mr Drew", genre: "Afrobeat", albumArt: "cover pics/Davido sunlight.jpg", url: "classic songs/Jay Hover ft Mr. Drew - Give me Love.mp3" },
  { title: "All for you", artist: "Joeboy", genre: "Afrobeat", albumArt: "cover pics/Joeboy all of you.jpeg", url: "classic songs/Joeboy All of you.mp3" },
  { title: "Baby", artist: "Joeboy", genre: "Afrobeat", albumArt: "cover pics/Joeboy baby.jpg", url: "classic songs/Joeboy Baby.mp3" },
  { title: "Beginning", artist: "Joeboy", genre: "Afrobeat", albumArt: "cover pics/Joeboy beginning.jpeg", url: "classic songs/Joeboy Beginning.mp3" },
  { title: "Better Thing", artist: "Joeboy", genre: "Afrobeat", albumArt: "cover pics/Joeboy better thing.jpg", url: "classic songs/Joeboy Better Thing.mp3" },
  { title: "Blessing", artist: "Joeboy", genre: "Afrobeat", albumArt: "cover pics/Joeboy Blessing.jpg", url: "classic songs/Joeboy Blessing.mp3" },
  { title: "Celebration", artist: "Joeboy", genre: "Afrobeat", albumArt: "cover pics/Joeboy Celebration.jpg", url: "classic songs/Joeboy Celebration.mp3" },
  { title: "Count me out", artist: "Joeboy", genre: "Afrobeat", albumArt: "cover pics/Joeboy Count me out.jpg", url: "classic songs/Joeboy Count me out.mp3" },
  { title: "Don't call me back", artist: "Joeboy", genre: "Afrobeat", albumArt: "cover pics/Joeboy Don't call Back ft Mayorkun.jpeg", url: "classic songs/Joeboy Don't Call me Back ft Mayorkun.mp3" },
  { title: "Door", artist: "Joeboy", genre: "Afrobeat", albumArt: "cover pics/Joeboy Door ft Kwesi Arthur.jpeg", url: "classic songs/Joeboy Door ft Kwesi Arthur.mp3" },
  { title: "Focus", artist: "Joeboy", genre: "Afrobeat", albumArt: "cover pics/Joeboy Focus.jpg", url: "classic songs/Joeboy Focus.mp3" },
  { title: "Lonely", artist: "Joeboy", genre: "Afrobeat", albumArt: "cover pics/Joeboy Lonely.jpg", url: "classic songs/Joeboy Lonely.mp3" },
  { title: "Number One", artist: "Joeboy", genre: "Afrobeat", albumArt: "cover pics/Joeboy  Number one.jpg", url: "classic songs/Joeboy Number One.mp3" },
  { title: "Oshe", artist: "Joeboy", genre: "Afrobeat", albumArt: "cover pics/Joeboy Oshe.jpeg", url: "classic songs/Joeboy Oshe.mp3" },
  { title: "Runaway", artist: "Joeboy", genre: "Afrobeat", albumArt: "cover pics/Joeboy Runaway.jpg", url: "classic songs/Joeboy Runaway.mp3" },
  { title: "Show me", artist: "Joeboy", genre: "Afrobeat", albumArt: "cover pics/Joeboy show me.jpeg", url: "classic songs/Joeboy Show Me.mp3" },
  




  


];
// To track the current song
let currentSongIndex = 0;
const songsPerPage = 12;
let currentPage = 1;

// Function to display featured songs
function toggleSongs() {
  const songsSection = document.getElementById('featured-songs');
  songsSection.classList.toggle('show');
  displaySongs(songs);
}

function displayFeaturedSongs() {
  displaySongs(songs);
}

// Function to display songs based on the current page
function displaySongsByPage(page) {
  console.log("Displaying page:", page);
  const startIndex = (page - 1) * songsPerPage;
  const endIndex = startIndex + songsPerPage;
  const paginatedSongs = songs.slice(startIndex, endIndex);
  
  // Call function to render songs
  displaySongs(paginatedSongs);

  // Update pagination controls
  updatePaginationControls();
}

// Pagination controls
function nextPage() {
  console.log("Next button clicked. Current page:", currentPage);
  if (currentPage * songsPerPage < songs.length) {
    currentPage++;
    displaySongsByPage(currentPage);
  }
}

function prevPage() {
  console.log("Previous button clicked. Current page:", currentPage);
  if (currentPage > 1) {
    currentPage--;
    displaySongsByPage(currentPage);
  }
}

// Update pagination buttons' state
function updatePaginationControls() {
  document.getElementById('prev-page').disabled = currentPage === 1;
  document.getElementById('next-page').disabled = currentPage * songsPerPage >= songs.length;
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
  albumArtImg.src = albumArt;
  
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
    playPauseButton.textContent = '⏸';
  } else {
    audioPlayer.pause();
    playPauseButton.textContent = '▶';
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

// Apply saved theme on page load
window.onload = function() {
  applySavedTheme();
  displayFeaturedSongs(); // Ensure this is called after applying the theme
  displaySongsByPage(currentPage); // Display songs on page load
  updatePaginationControls(); // Update pagination controls
};

// Add an event listener to the toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Toggle navigation menu on small screens
document.getElementById('menu-toggle').addEventListener('click', () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('nav-visible');
  navMenu.classList.toggle('nav-hidden');
});

// Add an event listener to the search input to filter songs as the user types
document.getElementById('search').addEventListener('input', searchSongs);
 