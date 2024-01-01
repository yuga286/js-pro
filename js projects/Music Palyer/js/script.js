//console.log("welcome");
//Initialize the Variables
let songIndex=0;
let audioElement=new Audio('/frontend development/js projects/Music Palyer/songs/Shiv-Tandav-Stotram(PagalWorlld.Com).mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"shiv Tandav", filepath:"/frontend development/js projects/Music Palyer/songs/Shiv-Tandav-Stotram(PagalWorlld.Com).mp3", coverPath:"/frontend development/js projects/Music Palyer/covers/10.jpg"}
]

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
});
//audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})


//listen to Events
audioElement.addEventListener('timeupdate',()=>{
   // console.log('timeupdate');
    //update seekbar
     const progress=(audioElement.currentTime/audioElement.duration)*100;
   // console.log(progress);
    myProgressBar.value=progress;
});

/*audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // Update seekbar
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    console.log(progress);
    myProgressBar.value = progress;
});
*/

myProgressBar.addEventListener('change',()=>{
    if(audioElement){
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
    }
});

// myProgressBar.addEventListener('change', () => {
//     if (audioElement) {
//         audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
//     }
// });


const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndexongIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`/frontend development/js projects/Music Palyer/songs/${songIndex +1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
        audioElement.src=`/frontend development/js projects/Music Palyer/songs/${songIndex +1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
        audioElement.src=`/frontend development/js projects/Music Palyer/songs/${songIndex +1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})