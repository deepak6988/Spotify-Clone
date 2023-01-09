console.log("hii");
let audioelement = new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let mastersongname=document.getElementById('songname');
let songindex=1;
let songs=[
        {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
        {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
        {songName: "DEAF KEV - Invincible ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
        {songName: "Different Heaven & EH!DE - My Heart", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
        {songName: "Janji-Heroes-Tonight-feat", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
        {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
        {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
        {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
        {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
        {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    ]
    
    masterplay.addEventListener('click', function (){
        if(audioelement.paused || audioelement.currentTime<=0){
            audioelement.play();
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
            sno();
        }
        else{
            audioelement.pause();
            masterplay.classList.remove('fa-circle-pause');
            masterplay.classList.add('fa-circle-play');
            allplay();
            giff();
        }
    })
    myprogressbar.addEventListener('change',function (){
        console.log(myprogressbar.value)
        audioelement.currentTime = (myprogressbar.value * audioelement.duration)/100;
    })
    audioelement.addEventListener('timeupdate',function (){
        // console.log(parseInt((audioelement.currentTime/audioelement.duration)*100));
        progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
        myprogressbar.value = progress;
    })
    function allplay(){
        Array.from(document.getElementsByClassName('songplay')).forEach(function(element){
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
            console.log("running function");
        })
    }
    Array.from(document.getElementsByClassName('songplay')).forEach(function(element){
        element.addEventListener('click',function(e){
            allplay();
            console.log(songindex);
            if(audioelement.paused||songindex!=parseInt(e.target.id)){
                songindex=parseInt(e.target.id);
                audioelement.src= `songs/${songindex}.mp3`;
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-circle-pause');
                audioelement.play();
                giff();
                audioelement.currentTime=0;
                masterplay.classList.remove('fa-circle-play');
                masterplay.classList.add('fa-circle-pause');
                mastersongname.innerText=songs[songindex].songName;
                console.log("runnnnnnnif");
            }
            else{
                e.target.classList.add('fa-circle-play');
                e.target.classList.remove('fa-circle-pause');
                audioelement.pause();
                masterplay.classList.remove('fa-circle-pause');
                masterplay.classList.add('fa-circle-play');
                console.log("runnnnnnnelse");
                giff();
            }
        } )
    })
    document.getElementById('next').addEventListener('click',function(){
        if(songindex>=10){
            songindex=1;
        }
        else{
            songindex++;
        }
        audioelement.src= `songs/${songindex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        sno();
    })
    document.getElementById('back').addEventListener('click',function(){
        if(songindex<=1){
            songindex=10;
        }
        else{
            songindex--;
        }
        audioelement.src= `songs/${songindex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        sno();
    })
    function sno(){
        console.log("fun-run");
        allplay();
        document.getElementById(songindex).classList.remove('fa-circle-play');
        document.getElementById(songindex).classList.add('fa-circle-pause');
        mastersongname.innerText=songs[songindex-1].songName;
        giff();
    }
    function giff(){
    if(audioelement.paused){
        document.getElementById('gif').style.opacity=0;
        console.log("opacity");
    }
    else{
        document.getElementById('gif').style.opacity=1;
        console.log("opacity");
    }
}
// setInterval(giff,100);