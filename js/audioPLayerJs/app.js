let song = document.querySelector('.song')
let play = document.querySelector('.audio__play-song')

let idSong = 0;
let cover = document.querySelector('.audio__cover-img')
let nameSong = document.querySelector('.audio__info-name')
let band = document.querySelector('.audio__info-band')
let songSrc = document.querySelector('.songSrc')

let progress = document.querySelector('.progressBar__play')
let progressContainer = document.querySelector('.progressBar')

let random = false
let randomBtn = document.getElementById('shuffle')

let replay = false
let replayBtn1 = document.getElementById('element1')
let replayBtn2 = document.getElementById('element2')

let volume = document.querySelector('.audio__volume-progress')
let volumeContainer = document.querySelector('.audio__volume-all')
let volumeIcon = document.querySelector('.audio__volume-icon')
let volumeNow = 0;

const musicList = [
    {
        id: 0,
        name: "Я хочу быть с тобой",
        band: "Nautilus Pompilius",
        song:  './audio/Nautilus_Pompilius_-_YA_khochu_byt_s_tobojj_47951027.mp3',
        img: './img/nautilus1.jpg'
    },   
    {
        id: 1,
        name: "Танцуй!",
        band: "Сплин",
        song:  './audio/Splin_-_Tancujj.mp3',
        img: './img/splin-tancuj-1.jpg'
    },
    {
        id: 2,
        name: "Огоньки",
        band: "Ляпис Трубецкой",
        song:  './audio/Lyapis_Trubeckojj_-_Ogonki.mp3',
        img: './img/lyapis.jpg'
    },
    {
        id: 3,
        name: "Девочка-пай",
        band: "Михаил Круг",
        song:  './audio/Mikhail_Krug_-_Devochka-pajj.mp3',
        img: './img/krug1.jpg'
    },
    {
        id: 4,
        name: "Скованные одной цепью",
        band: "Nautilus Pompilius",
        song:  './audio/Nautilus_Pompilius_-_Skovannye_odnojj_cepyu.mp3',
        img: './img/nautilus2.jpg'
    }
]
setSong(0)

function setSong(id) {
    const needSong = musicList.find(item => item.id === id)

    cover.src = needSong.img
    nameSong.textContent = needSong.name
    band.textContent = needSong.band
    song.src = needSong.song
    song.load()
    if (play.classList.contains('pause')) {
        song.play()
    }
    idSong = needSong.id
}

function playPause() {
    if (play.classList.contains('play')) {
        song.play()
        play.src = './img/pause.svg'
        play.classList.remove('play')
        play.classList.add('pause')
    } else {
        song.pause()
        play.src = './img/play.svg'
        play.classList.remove('pause')
        play.classList.add('play')
    }
}

function pause() {
    song.pause()
    play.src = './img/play.svg'
    play.classList.remove('pause')
    play.classList.add('play')
}

function nextSong() {
    if (!random && !replay) {
        if (idSong === (musicList.length - 1)) {
            idSong = 0
            setSong(idSong)
        } else {
            setSong(idSong + 1)
        }
    } else if (replay) {
        setSong(idSong)
    } else {
        setSong(Math.floor(Math.random() *  (musicList.length)))
    }
}

function prevSong() {
    if (idSong === 0) {
        setSong(musicList.length - 1)
    } else {
        setSong(idSong - 1)
    }
}

function randomSongs() {
    random ? random = false : random = true
    if (random) {
        randomBtn.style.fill = '#574c31'
    } else {
        randomBtn.style.fill = '#ada490'
    }
}

function replaySong() {
    replay ? replay = false : replay = true
    if (replay) {
        replayBtn1.style.fill = '#574c31'
        replayBtn2.style.fill = '#574c31'
    } else {
        replayBtn1.style.fill = '#ada490'
        replayBtn2.style.fill = '#ada490'
    }
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
    if (duration === currentTime) {
        nextSong()
    }
}

song.addEventListener('timeupdate', updateProgress)

function setProgress(e) {
     const width = this.clientWidth
     const clickX = e.offsetX
     const duration = song.duration

     song.currentTime = (clickX / width) * duration
}

progressContainer.addEventListener('click', setProgress)

function setVolume(e) {
    const width = this.clientWidth
    const clientX = e.offsetX
    song.volume = clientX / width
    volume.style.width = `${clientX}px`
}

volumeContainer.addEventListener('click', setVolume)

volumeIcon.addEventListener('click', () => {
    if (volumeIcon.classList.contains('notMute')) {
        volumeIcon.src = './img/volume-mute.svg'
        volumeIcon.classList.remove('notMute')
        volumeIcon.classList.add('Mute')
        volumeNow = song.volume
        song.volume = 0
        volume.style.width = '0px'
    } else if (volumeIcon.classList.contains('Mute')){
        volumeIcon.src = './img/volume.svg'
        volumeIcon.classList.remove('Mute')
        volumeIcon.classList.add('notMute')
        song.volume = volumeNow
        volume.style.width = `${volumeNow * 100}px` 
    }
})