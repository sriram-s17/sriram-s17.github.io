let myImage = document.querySelector('img');

myImage.onclick = ()=> {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Penguins.jpg') {
      myImage.setAttribute('src','images/Desert.jpg');
    } else {
      myImage.setAttribute('src','images/Penguins.jpg');
    }
}