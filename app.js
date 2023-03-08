let btn = document.getElementById('BtnSpin'); //  переменная для хнопочки
let spin = document.querySelectorAll('#SpinBlock');
function game() // основная функция 
{   
    for(i=0;i<3;i++){
        spin[i].classList.add('roll');
    }

    console.log('Game'); // Debug
    btn.disabled =true; // Отключение кнопки чтобы не было двух игр одновременно
    let a=0; // счетчик
    let ChangePicture = setInterval(function() {
        console.log('a= '+a) // Debug
        setRandomPicture();
        if (a== 5) {
          clearInterval(ChangePicture);
        }
        a++
      }, 500);//timer смена картинок
      setTimeout("btn.disabled =false", 3000) 
      setTimeout( "console.log('Game end')", 3000) 
      setTimeout(deletClass,3000)
    //   setTimeout(Show,2890)
}
function setRandomPicture() // изменение картинок
{  
    for(i=0; i<3; i++)
{
    console.log("./image/"+(getRandomNumber(0,5))+'.png'); // Debug
    document.getElementById('img'+i).src = ("./image/"+(getRandomNumber(0,5))+'.png'); 
}}
function getRandomNumber(min, max)  // Random int
{
    return Math.floor(Math.random() * (max - min) + min)
} 
function deletClass(){
    for(i=0;i<3;i++){
        spin[i].classList.remove('roll');
        // spin[i].style.top = "-170px";
    }
}
// function Show(){
//     for(i=0;i<3;i++){
//         spin[i].style.top = "0";
//     }
// }

