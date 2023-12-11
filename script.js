//JS Type Text Animation
let title = document.getElementById('textTitle');
let text = 'Emad Uddin Adil';
let start = 0;
//setInterval(textType, 220);
function textType(){
    title.innerHTML= text.slice(0, start++);
    if(start > text.length){
        start = 0 ;
    }
}


//Dec to Binary
let decToBinBtn = document.getElementById("decToBin");
decToBinBtn.addEventListener('click',(a)=>{
    a.preventDefault(); 
    let decToBin = document.getElementById('decToBinInput').value; 
    binaryNumber = Number(decToBin).toString(2); 
    document.getElementById("decToBinOutput").innerText =binaryNumber ; 
})

//Binary to Decimal

// var binary = "1101";
// var digit = parseInt(binary, 2);
// console.log(digit);

let binToDecBtn = document.getElementById('binToDec');
binToDecBtn.addEventListener('click',binaryFunction) ;
function binaryFunction(a){
    a.preventDefault(); 
    let binToDec = document.getElementById('binToDecInput').value;
    let decimalNum = parseInt(binToDec, 2); 
    document.getElementById('binToDecOutput').innerHTML =decimalNum ;
}


// Digital Clock
 let clockFunction = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    let timeFormat = "AM"
  
    
    if(hours === 0){
        hours = 12
    }
    else if(hours >=12){
        hours = hours - 12;
        timeFormat = "PM"
    }
   
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    second = second < 10 ? '0' + second : second;

    let finalTime =`${hours} : ${minutes} : ${second} ${timeFormat}` ;
    document.getElementById('time').innerText = finalTime;
 }


//setInterval(clockFunction, 1000) ;

// Hexadecimal color code




function generateColor (){ 
    let hexoColor = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'] ;
    let color = '#';
    for(x=0; x<6;x++){
        let num = Math.round(Math.random() * 15);
        let num2 = hexoColor[num];
        color += num2; 
        console.log(color);
       
    } 
    document.getElementById('main').style.backgroundColor = color;
    document.getElementById('output').style.color = color;
    document.getElementById('output').innerHTML = color;

}

//Online-Offline checker
 let checker = document.getElementById('online-offline') ;
 window.addEventListener('online',check);
 window.addEventListener('offline',check);
 function check(){
    if(navigator.onLine){
        checker.innerHTML = 'You are Online';
        checker.style.color = 'green' ; 
    }
    else{
        checker.innerHTML = 'You are Offline';
        checker.style.color = 'red'  ;
    }
 }
    check();
