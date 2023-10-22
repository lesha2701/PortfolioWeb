let song = document.querySelector('.song')
let play = document.querySelector('.audio__play-song')

let idSong = 0;
let cover = document.querySelector('.audio__cover-img')
let nameSong = document.querySelector('.audio__info-name')
let band = document.querySelector('.audio__info-band')
let songSrc = document.querySelector('.songSrc')

let random = false

let replay = false

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
    pause()
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
        return
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
}

function replaySong() {
    replay ? replay = false : replay = true
}

