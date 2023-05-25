// ------------------------------------------------- PLAY AND PAUSE------------------------------------------------------------
function playPause() {
    const audio = document.getElementById("audio");
    const playButton = document.getElementById("play");
    if (audio.paused) {
        audio.play();
        playButton.innerText = "Pause";
    } else {
        audio.pause();
        playButton.innerText = "Play";
    }
};
// ------------------------------------------------- LOOP------------------------------------------------------------
function toggleLoop() {
    const loopButton = document.getElementById("loop");
    audio.loop = !audio.loop;
    loopButton.innerText = audio.loop ? "Unloop" : "Loop";
};

// ------------------------------------------------- VOLUME------------------------------------------------------------
// Lấy phần tử nút volume và thanh trượt âm lượng
const volumeSlider = document.getElementById("volume");
const volumeBtn = document.querySelector(".volume-btn");
const volumeBar = document.querySelector(".volume-bar");

// Thêm sự kiện click cho nút volume
volumeBtn.addEventListener("click", () => {
  // Kiểm tra xem thanh trượt âm lượng có đang hiển thị hay không
  if (volumeBar.classList.contains("show")) {
    // Nếu đang hiển thị, ẩn thanh trượt âm lượng
    volumeBar.classList.remove("show");
  } else {
    // Nếu không hiển thị, hiển thị thanh trượt âm lượng
    volumeBar.classList.add("show");
  }
});

// Thêm sự kiện change cho thanh trượt âm lượng
volumeSlider.addEventListener('change', changeVolume);

// Hàm thay đổi âm lượng
function changeVolume() {
  audio.volume = volumeSlider.value;
  
  // Kiểm tra giá trị của thanh trượt âm lượng
  if (volumeSlider.value == 0) {
    // Nếu giá trị là 0, đổi tên nút volume thành "Silent"
    volumeBtn.textContent = "Mute";
  } else {
    // Nếu giá trị khác 0, đổi tên nút volume thành "Volume"
    volumeBtn.textContent = "Volume";
  }
}


// ------------------------------------------------- MY FAVORITE------------------------------------------------------------
// Thêm mảng chứa thông tin về các bài hát trong thư viện
const songs = [
    { title: "Cơn mưa ngang qua", src: "album/music/con-mua-ngang-qua.mp3", cover: "album/cover/con-mua-ngang-qua.jpg" },
    { title: "Way Back Home", src: "album/music/way-back-home.mp3", cover: "album/cover/way-back-home.jpg" },
    { title: "Run Free", src: "album/music/run-free.mp3", cover: "album/cover/run-free.jpg" },
    { title: "The River", src: "album/music/the-river.mp3", cover: "album/cover/the-river.jpg" },
];

// Thêm các bài hát vào danh sách trong thư viện
const songList = document.querySelector(".song-list");
songs.forEach((song, index) => {
    const songElement = document.createElement("div");
    songElement.classList.add("song");
    songElement.textContent = song.title;
    songElement.addEventListener("click", () => playSong(index));
    songList.appendChild(songElement);
});

function playSong(index) {
    audio.src = songs[index].src;
    document.getElementById("cover").src = songs[index].cover;
    const titleElement = document.getElementById("title");
    titleElement.innerText = songs[index].title;
    audio.play();
    playButton.innerText = "Pause";
};

// ------------------------------------------------- PROGRESS-PERCENT AND TIME-UPDATE ------------------------------------------------------------
const seekBar = document.querySelector(".seek-bar");
const time = document.querySelector(".time");

audio.addEventListener("timeupdate", () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    seekBar.value = progressPercent;

    const currentMinutes = Math.floor(audio.currentTime / 60);
    let currentSeconds = Math.floor(audio.currentTime % 60);
    if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
    }

    const durationMinutes = Math.floor(audio.duration / 60);
    let durationSeconds = Math.floor(audio.duration % 60);
    if (durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`;
    }

    time.textContent = `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
});

// Thêm sự kiện để điều chỉnh bài hát phát ở đoạn nào
seekBar.addEventListener("input", () => {
    const seekTime = (audio.duration / 100) * seekBar.value;
    audio.currentTime = seekTime;
});

// ------------------------------------------------- PREV và NEXT SONG ------------------------------------------------------------ 
let currentSongIndex = 0;

function updateCurrentSongIndex() {
    const audio = document.querySelector('#audio');
    if (audio.src) {
      const currentSongSrc = audio.src;
      const currentSong = songs.find(song => song.src === currentSongSrc);
      currentSongIndex = songs.indexOf(currentSong);
    } else {
      currentSongIndex = 0;
    }
  }

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
      currentSongIndex = 0;
    }
    const nextSong = songs[currentSongIndex];
    const audio = document.querySelector('#audio');
    audio.src = nextSong.src;
    const coverImg = document.querySelector('#cover');
    coverImg.src = nextSong.cover;
    const title = document.querySelector('#title');
    title.textContent = nextSong.title;
    audio.play();
    updateCurrentSongIndex();
  }
  
  function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
      currentSongIndex = songs.length - 1;
    }
    const prevSong = songs[currentSongIndex];
    const audio = document.querySelector('#audio');
    audio.src = prevSong.src;
    const coverImg = document.querySelector('#cover');
    coverImg.src = prevSong.cover;
    const title = document.querySelector('#title');
    title.textContent = prevSong.title;
    audio.play();
    updateCurrentSongIndex();

  }

    const nextBtn = document.querySelector('#next');
    nextBtn.addEventListener('click', function() {
    nextSong();
});

    const prevBtn = document.querySelector('#prev');
    prevBtn.addEventListener('click', function() {
    prevSong();
    });

// ------------------------------------------------- AUTO-PLAY ------------------------------------------------------------ 
let isAutoPlay = true;

// Xử lý sự kiện click nút Autoplay
const autoplayBtn = document.querySelector('#autoplay');
autoplayBtn.addEventListener('click', function() {
  isAutoPlay = !isAutoPlay;
  if (isAutoPlay) {
    autoplayBtn.textContent = 'Autoplay: On';
  } else {
    autoplayBtn.textContent = 'Autoplay: Off';
  }
});

// Bắt đầu chuyển bài khi hết bài
audio.addEventListener('ended', function() {
  nextSong();
});

// Tắt chức năng autoplay mặc định là Off
isAutoPlay = false;
autoplayBtn.textContent = 'Autoplay: Off';
