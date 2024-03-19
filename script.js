console.log("Welcome To Swiftify 13")
let songIndex=0;
let audioElement=new Audio('song/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgessbar=document.getElementById('progressbar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName:"Gorgeous", filePath:"song/1.mp3",coverPath:"covers/cover_1.png"},
    {songName:"BlankSpace (Taylor's Version)", filePath:"song/2.mp3",coverPath:"covers/cover_2.jpg"},
    {songName:"Love Story (Taylor's Version)", filePath:"song/3.mp3",coverPath:"covers/cover_4.jpg"},
    {songName:"Our Song", filePath:"song/4.mp3",coverPath:"covers/cover_5.jpg"},
    {songName:"Paper Rings", filePath:"song/5.mp3",coverPath:"covers/cover_6.jpg"},
    {songName:"Illicit Affairs", filePath:"song/6.mp3",coverPath:"covers/cover_7.jpg"},
    {songName:"Enchanted", filePath:"song/7.mp3",coverPath:"covers/cover_8.jpeg"},
    {songName:"I Bet You Think About Me (Taylor's Version)", filePath:"song/8.mp3",coverPath:"covers/cover_3.jpeg"},
    {songName:"'Tis the damn season", filePath:"song/9.mp3",coverPath:"covers/cover_9.png"},
    {songName:"Anti Hero", filePath:"song/10.mp3",coverPath:"covers/cover_10.jpeg"},
]

songItems.forEach((element, i)=>{ 
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity=0;
    }
})



//events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgessbar.value=progress;

})

myProgessbar.addEventListener('change',()=>{
    audioElement.currentTime=myProgessbar.value*audioElement.duration/100;
})


const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

const makeAllPause = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-play');
        element.classList.add('fa-pause');
    })
}





Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        masterSongName.innerText = songs[songIndex].songName;   
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `song/${songIndex+1}.mp3`;
        audioElement.play();
        audioElement.currentTime=0;
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity=1;
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
