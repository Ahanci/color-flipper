const hex =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    let hexColor='#';
    for ( let i=0; i<6; i++){
        hexColor+=hex[getRandomNumber()];
    };
    color.textContent= hexColor;
    document.body.style.backgroundColor= hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}

/********* BENİM ÇÖZÜM AMA TEK BİR SAYI VERİYOR */ //burada sorun değişken olarak tanımlamam, bu yüzden renk kodu sadece 1kez geliyor:
// let hex1= hex[String(Math.floor(Math.random()*16))];
// let hex2= hex[String(Math.floor(Math.random()*16))];
// let hex3= hex[String(Math.floor(Math.random()*16))];
// let hex4= hex[String(Math.floor(Math.random()*16))];
// let hex5= hex[String(Math.floor(Math.random()*16))];
// let hex6= hex[String(Math.floor(Math.random()*16))];
// let randomNumber= getRandomNumber();

// console.log('#'+hex1+hex2+hex3+hex4+hex5+hex6);


//  btn.addEventListener('click', function () {
//      let randomNumber= getRandomNumber ();
//      document.body.style.backgroundColor= randomNumber;
//      color.textContent=getRandomNumber;

//  });

//  function getRandomNumber (){
//      return ('#'+hex1+hex2+hex3+hex4+hex5+hex6);
//  };