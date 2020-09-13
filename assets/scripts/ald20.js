//FOR THE RESPONSIVE NAV BAR
/*
Logic: check whether div with class 'cover' is currently visible or not. If visible, then nav-bar = dark,
else, colorful.
*/
var navBar = document.getElementById('nav-cover');
var navLink = document.getElementsByClassName('nav-link');
function isVisible(){
    //getting current position of 'cover' div wrt visibility on screen.
    let currPos = document.getElementsByClassName('cover')[0].getBoundingClientRect();
    let coverBottom = currPos.bottom;
    var isVisible = (coverBottom >= 0);
    return isVisible;
}
 
window.onscroll = function(){
    if(isVisible()){
        for(let i of navLink){
           i.style.color = 'white';
        }
        navBar.style.background = '#333';
        navBar.style.transition = 'background 0.5s, color 0.5s';
    }
    else{
        for(let i of navLink){
            i.style.color = '#444';
        }
        navBar.style.background = 'linear-gradient(to right, #50C9CE, #FDCA40, #DB5461,  #72A1E5)';
        navBar.style.transition = 'background 0.5s, color 0.5s';
    }
}

//FOR THE CIRCLES BACKGROUND
/*
logic: create a new div every 200 ms - and assign className = 'stars' (styling in ald2020.scss).
then we pick a random integer for the position of the "stars", and pick one color out of the colorScheme. 
(animation also entirely in css).
*/
var cover = document.getElementsByClassName('cover')[0];
let colorPicker = 0;
let colorScheme = ['#50C9CE', '#FDCA40', '#DB5461',  '#72A1E5', '#73F764', '#D37D36'];
//first 4 - nav bar color scheme, after - additional colors to fill in 

var height = cover.clientHeight;

setInterval(function(){
    var star = document.createElement('div');
    star.className = 'stars';
    star.style.top = getRndInteger(10, 10+height) + "px";
    star.style.left = getRndInteger(10,2200) + "px";
    star.style.backgroundColor = colorScheme[colorPicker];
    colorPicker = (colorPicker == 7) ? 0 : colorPicker+1 ;
    cover.appendChild(star);
}, 100);


//boilerplate
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}