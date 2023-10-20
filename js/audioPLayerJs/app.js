let song = document.querySelector('.song')
let play = document.querySelector('.audio__play-song')

let cover = document.querySelector('.audio__cover-img')
let nameSong = document.querySelector('.audio__info-name')
let band = document.querySelector('.audio__info-band')

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
    }
]
setSong(0)

function setSong(id) {
    const needSong = musicList.find(item => item.id === id)
    cover.src = needSong.img.toString()
    nameSong.textContent = needSong.name
    band.textContent = needSong.band
}

function playPause() {
    console.log(play.src)
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