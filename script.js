let songName=document.querySelector("#song-name")
let songSinger=document.querySelector("#song-singer")
let songImage=document.querySelector(".song-image")
let playPauseImg=document.querySelector("#play-pause")
let volumeRange=document.querySelector("#volume-range")
let songRange=document.querySelector("#song-duration")
let volSvg=document.querySelector("#vol-svg")
let musicAnim=document.querySelector("#musicanim")
let playlistImg=document.querySelector("#playlist-img")
let playlist=document.querySelector(".playlist")
let playlistSong=document.querySelectorAll(".playlist-song")
let index=0;
let playingSong=false;
let track=document.createElement("audio")
let songs=[
    {
        name:"Tu Hai Kahan",
        path:"tu hai kahan.mp3",
        image:"tu h kahan.jpg",
        singer:"AUR"
    },
    {
        name:"Shikayat",
        path:"shikayat.mp3",
        image:"shikayat.jpg",
        singer:"AUR"
    },
    {
        name:"Mai Agar Kahoon",
        path:"mai agr kahun.mp3",
        image:"Main-Agar-Kahoon.jpg",
        singer:"Sonu Nigam"
    },
    {
        name:"Husn",
        path:"husn.mp3",
        image:"husn.jpg",
        singer:"Anuv Jain"
    },
    {
        name:"Ek Din",
        path:"ek din.mp3",
        image:"ek din.jpg",
        singer:"Jagjit Singh"
    },
    {
        name:"Dil Toh Baccha Hai Ji",
        path:"dil toh baccha.mp3",
        image:"Dil-Toh.jpg",
        singer:"Rahat Fateh Ali Khan"
    },
    {
        name:"Chal Diye Tum Kahan",
        path:"chal diye.mp3",
        image:"chal diye.jpg",
        singer:"Krishnakumar Kunnath"
    }
]
function loadTrack(index){
track.src=songs[index].path;
songName.innerHTML=songs[index].name;
songSinger.innerHTML=songs[index].singer;
songImage.style=`background-image: url("${songs[index].image}");`
volume()
setInterval(()=>{
songRange.max=track.duration
songRange.value=track.currentTime
},1000)
track.loop=true
track.load()
}
loadTrack(index);

function playPause(){
    if(playingSong==false){
        playSong()
       
    }else{
        pauseSong()
       
    }
}
function playSong(){
    track.play();
    playingSong=true;
playPauseImg.src="pause.svg"
 musicAnim.style.display="block"

}
function pauseSong(){
    track.pause();
    playingSong=false;
playPauseImg.src="play.svg"
 musicAnim.style.display="none"
}
function nextSong(){
    if(index<songs.length-1){
        index++;
        loadTrack(index)
        playSong()
    }else{
        index=0;
        loadTrack(index)
        playSong()
    }
}
function previousSong(){
    if(index>0){
        index--;
        loadTrack(index)
        playSong()
    }else{
        index=songs.length-1;
        loadTrack(index)
        playSong()
    }
}
function volume(){
track.volume=volumeRange.value/100;
if(volumeRange.value==0){
    volSvg.src="mute.svg"
}else{
    volSvg.src="volume.svg"
}
}
function duration(){
    track.currentTime=songRange.value
}
playlistImg.addEventListener("click",()=>{
playlist.classList.toggle("playlist-active")
if(playlist.classList.contains("playlist-active")){
    playlistImg.src="cross.svg"
}else{
    playlistImg.src="playlist.svg"
}
})
playlistSong.forEach((song,index)=>{
    song.addEventListener('click',()=>{
        loadTrack(index);
        playSong()
        playlist.classList.remove("playlist-active")
        playlistImg.src="playlist.svg"

    })
})
