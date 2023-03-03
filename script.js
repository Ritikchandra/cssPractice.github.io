const randomColor = ['green', 'red', 'blue', 'black', 'white', 'bisque', 'violet', 'purple'];

function changeDivColor(){
 
 const randomIndex2 = Math.floor(Math.random()*randomColor.length); document.querySelector('div').style.backgroundColor = randomColor[randomIndex2];
 
}



function changeBodyColor(){
 const randomIndex1 = Math.floor(Math.random()*randomColor.length); document.querySelector('body').style.backgroundColor = randomColor[randomIndex1];
 
 
}

function changeBothColor(){
   const randomIndex1 = Math.floor(Math.random()*randomColor.length); document.querySelector('body').style.backgroundColor = randomColor[randomIndex1];
  
  const randomIndex2 = Math.floor(Math.random()*randomColor.length); document.querySelector('div').style.backgroundColor = randomColor[randomIndex2];
}