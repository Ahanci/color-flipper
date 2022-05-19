const colors=['green', 'red', 'darkblue','blue', 'rgb(33, 178, 218)', 'darkgolden', 'darkgoldenrod'];
const btn= document.querySelector('.btn');
const color= document.querySelector('.color');

btn.addEventListener('click', function (){
    // get random number between: 0-6:
    let randomNumber = getRandomNumber() ;
    document.body.style.backgroundColor= colors[randomNumber];
    color.textContent=colors[randomNumber];

});

function getRandomNumber (){
    return Math.floor(Math.random()*colors.length);
};

// btn.addEventListener

// rgbaNumber{
//     let randomNumber = getRgbaNumber();

