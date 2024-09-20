/* <i class="fa-solid fa-heart"></i> */


console.log("Welcome To Spotify");


// initialise the variables
let songIndex = 0;
let audioElement = new Audio('img/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Akhiyaan Gulab", filePath: "img/songs/1.mp3", coverPath: "img/covers/Akhiyaan-Gulaab.jpg", artist: "(Mitraz)"},
    {songName: "Aayi Nai", filePath: "img/songs/2.mp3", coverPath: "img/covers/aayi-nai.jpg", artist: "(Sachin-Jigar)"},
    {songName: "Ishq", filePath: "img/songs/3.mp3", coverPath: "img/covers/Ishq.jpg", artist: "(Faheem Abdullah)"},
    {songName: "Baarishein", filePath: "img/songs/4.mp3", coverPath: "img/covers/Baarishein.jpg", artist: "(Anuv Jain)"},
    {songName: "Jo Tum Mere Ho", filePath: "img/songs/5.mp3", coverPath: "img/covers/Jo-Tum-Mere-Ho.jpg", artist: "(Anuv Jain)"},
    {songName: "Tu Jaane Na", filePath: "img/songs/6.mp3", coverPath: "img/covers/tu-jaane-na.jpg", artist: "(Atif Aslam)"},
    {songName: "Sanam Teri Kasam", filePath: "img/songs/7.mp3", coverPath: "img/covers/Sanam-Teri-Kasam.jpg", artist: "(Ankit Tiwari)"},
    {songName: "Tu Hi Haqeeqat", filePath: "img/songs/8.mp3", coverPath: "img/covers/tu-hi-haqeeqat.jpg", artist: "(Javed Ali)"},
    {songName: "Phir Mohabbat", filePath: "img/songs/9.mp3", coverPath: "img/covers/phir-mohabbat.jpg", artist: "(Arijit Singh)"},
    {songName: "Janiye", filePath: "img/songs/10.mp3", coverPath: "img/covers/janiye.jpg", artist: "(Vishal Mishra)"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("song")[0].innerText = songs[i].songName;
    element.getElementsByClassName("artist")[0].innerText = songs[i].artist;
})


// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // update seekBar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);  // e.target se wo element mil jaega jispr click hua h
        songIndex = parseInt(e.target.id);
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `img/songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    
    audioElement.src = `img/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    
    audioElement.src = `img/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})