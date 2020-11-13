let start = document.querySelector('.start');
let reset = document.querySelector('.reset');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let mseconds = document.querySelector('.mseconds');

let msid, sid, mid, hid ;

start.addEventListener('click',fstart);
function fstart(){
    if(start.textContent == 'START'){
        start.textContent = 'STOP';
    
        msid = setInterval(fms,1);
        sid = setInterval(fs,1000);
        mid = setInterval(fm,60000);
        hid = setInterval(fh,3600000);
    }
    else{
        start.textContent = 'START';
        clearInterval(msid);
        clearInterval(sid);
        clearInterval(mid);
        clearInterval(hid);
    }
}

function fms(){
    if(mseconds.textContent == 99){
        mseconds.textContent = '0';
    }
    else
        mseconds.textContent = Number(mseconds.textContent) + 1 ;
}

function fs(){
    if(seconds.textContent == '59'){
        seconds.textContent = '0';
    }
    else{
        seconds.textContent = Number(seconds.textContent) + 1;
    }
}

function fm(){
    document.querySelector('.mins').style.display = 'flex';
    if(minutes.textContent == "")
        minutes.textContent = '1';
    else if(minutes.textContent == 59){
        minutes.textContent = '0';
    }
    else
        minutes.textContent = Number(minutes.textContent) + 1;
}

function fh(){
    document.querySelector('.hrs').style.display = 'flex';
    if(hours.textContent == "")
        hours.textContent = '1';
    else
        hours.textContent = Number(hours.textContent) + 1;
}

reset.addEventListener('click',freset);
function freset(){
    clearInterval(msid);
    clearInterval(sid);
    clearInterval(mid);
    clearInterval(hid);
    mseconds.textContent = 0;
    seconds.textContent = 0;
    minutes.textContent = "";
    hours.textContent = "";
}
