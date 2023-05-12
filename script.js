let songindex=0;
let myProgressbar=document.getElementById('myProgressbar')
let audioElement=new Audio('1.MP3');
let songitems=Array.from(document.getElementsByClassName('songitem'));
//  let gif=document.getElementsByClassName('gif');
//  gif.style.opacity=0
let songs=[
    {songName:"darsal atif aslam",filePath:"1.MP3",coverPasth:"1.jpg"},
    {songName:"bulleya arijit singh",filePath:"2.MP3",coverPasth:"2.jpg"},
    {songName:"chaand baaliya ft.ad",filePath:"3.MP3",coverPasth:"3.jpg"},
    {songName:"chikini chameli ",filePath:"4.MP3",coverPasth:"4.jpg"},
    {songName:"a dil hai muskil arijit ",filePath:"5.MP3",coverPasth:"5.jpg"},
    {songName:"fall off excluding ",filePath:"6.MP3",coverPasth:"6.jpg"},
    {songName:"humrah  ft.sachet t",filePath:"7.MP3",coverPasth:"7.jpg"},
    {songName:"kabira ft.arijit",filePath:"8.MP3",coverPasth:"8.jpg"},
    {songName:"keshariya ft.arijit singh",filePath:"9.MP3",coverPasth:"9.jpg"},
    {songName:"liggi ft.ritviz ",filePath:"10.MP3",coverPasth:"10.jpg"},
    {songName:"Qaafirana ft.arijit singh",filePath:"11.MP3",coverPasth:"11.jpg"},
    {songName:"sooraj duba hai ",filePath:"12.MP3",coverPasth:"12.jpg"},
    {songName:"naina da kya",filePath:"13.MP3 ",coverPasth:"13.jpg"}
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0){
        audioElement.play();
     masterPlay.classList.remove('fa-play-circle')
     masterPlay.classList.add('fa-pause-circle')
    }
    else if(audioElement.play ||audioElement.currentTime>=0){
        audioElement.pause();
     masterPlay.classList.add('fa-play-circle')
     masterPlay.classList.remove('fa-pause-circle')
    }
    
})
audioElement.addEventListener('timeupdate',()=>{
    Progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value=Progress;
}
)
myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressbar.value*audioElement.duration)/100;
}
)
const makeAllplay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
           
    })
    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioElement.paused||audioElement.currentTime<=0){
        console.log(e.target);
        makeAllplay();
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        songindex=parseInt(e.target.id);
        audioElement.src=`${songindex+1}.mp3`;     
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        }
        else{
        console.log(e.target);
        // gif.style.opacity=1
        makeAllplay();
        e.target.classList.remove('fa-pause-circle')
        e.target.classList.add('fa-play-circle')
        songindex=parseInt(e.target.id);
        audioElement.src=`${songindex+1}.mp3`;     
        audioElement.currentTime=0;
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        }
       
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=13){
        songindex=0
    }
    else{
        songindex += 1;
    }
    audioElement.src=`${songindex+1}.mp3`;     
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0
    }
    else{
        songindex -= 1;
    }
    audioElement.src=`${songindex+1}.mp3`;     
    // audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    

})
songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPasth;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
console.log(audioElement.currentTime);