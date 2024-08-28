//var fso = new ActiveXObject("Scripting.FileSystemObject");
//var s = fso.OpenTextFile("./songs.csv");

// if(s){
//     const reader = new FileReader();
//     reader.onload
// }

var boneFields = new Audio('BoneFields.mp3');
var bubbleTea = new Audio('BubbleTea.mp3');
var highPitch1 = new Audio('HighPitch1.wav');
var sweep1 = new Audio('Sweep1.wav');
var wrongPlace = new Audio('WrongPlace.mp3');
var rain = new Audio('Rain.mp3');
var rainThunder = new Audio('RainThunder.mp3');
var wompWomp = new Audio('WompWomp.mp3');
var arrowImpact = new Audio('ArrowImpact.mp3');
var sword1 = new Audio('Sword1.mp3');
var explosion = new Audio('Explosion.mp3');
var forgottenCave = new Audio("ForgottenCave.mp3");
var highPitch2 = new Audio("HighPitch2.mp3");
var everythingIIRP = new Audio('EverythingIIRP.mp3');
var magicSpell = new Audio('MagicSpell.mp3');
var whatAreYou = new Audio('whatAreYou.mp3');
var seaAdventure = new Audio('SeaAdventure.mp3');
var peaceful = new Audio('Peaceful.mp3');


let audioDictionary = new Map();

audioDictionary.set(boneFields, "boneFields");
audioDictionary.set(bubbleTea, "bubbleTea");
audioDictionary.set(highPitch1, "highPitch1");
audioDictionary.set(sweep1, "sweep1");
audioDictionary.set(wrongPlace, "wrongPlace");
audioDictionary.set(rain, "rain");
audioDictionary.set(rainThunder, "rainThunder");
audioDictionary.set(wompWomp, "wompWomp");
audioDictionary.set(arrowImpact, "arrowImpact");
audioDictionary.set(sword1, "sword1");
audioDictionary.set(explosion, "explosion");
audioDictionary.set(forgottenCave, "forgottenCave");
audioDictionary.set(highPitch2, "highPitch2");
audioDictionary.set(everythingIIRP, "everything");
audioDictionary.set(magicSpell, "magicSpell");
audioDictionary.set(whatAreYou, "whatAreYou");
audioDictionary.set(seaAdventure, "seaAdventure");
audioDictionary.set(peaceful, "peaceful");




function playAudio(audio){
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
}
function restartAudio(audio){
    audio.currentTime = 0;
}

function loopAudio(audio){
    if(audio.loop == true){
        audio.loop = false;
    }else{
        audio.loop = true;
    }
}

function changeColor(e){
    var target = e.target;
    var status = target.classList.contains('active');
    e.target.classList.add(status ? 'inactive' : 'active');
    e.target.classList.remove(status ? 'active' : 'inactive'); 
}

var changingAudio1;
var value1;

var changingAudio2;
var value2; 

var changingAudio3;
var value3;

var rate = 0.025;

function changeVolume(audio, value){
    value *= 0.01;

    console.log(audio);
    console.log(value);
    
    if(audio.paused){
        audio.volume = value;
    }else if(changingAudio1 == null){
        changingAudio1 = audio;
        value1 = value;
    }else if(changingAudio2 == null){
        changingAudio2 = audio;
        value2 = value;
    }else if(changingAudio3 == null){
        changingAudio3 = audio;
        value3 = value;
    }
    
    //audio.volume = value * 0.01;
}

const intervalId = setInterval(updateAudio, 100);


function updateAudio(){
    if(changingAudio1 != null){
        if(changingAudio1.volume > value1 - rate && changingAudio1.volume < value1 + rate){
            changingAudio1 = null;
        }else if(changingAudio1.volume < value1){
            changingAudio1.volume += rate;
        }else if(changingAudio1.volume > value1){
            changingAudio1.volume -= rate;
        }
    }

    if(changingAudio2 != null){
        if(changingAudio2.volume > value2 - rate && changingAudio2.volume < value2 + rate){
            changingAudio2 = null;
        }else if(changingAudio2.volume < value2){
            changingAudio2.volume += rate;
        }if(changingAudio2.volume > value2){
            changingAudio2.volume -= rate;
        }
    }

    if(changingAudio3 != null){
        if(changingAudio3.volume > value3 - rate && changingAudio3.volume < value3 + rate){
            changingAudio3 = null;
        }else if(changingAudio3.volume < value2){
            changingAudio3.volume += rate;
        }if(changingAudio3.volume > value3){
            changingAudio3.volume -= rate;
        }
    }
}



audioDictionary.forEach((name, key) =>{
   key.addEventListener('ended', function(){
        key.currentTime = 0;
        var b = document.getElementById(name);
        var status = b.classList.contains('active');
        b.classList.add(status ? 'inactive' : 'active');
        b.classList.remove(status ? 'active' : 'inactive'); 
    });

});

