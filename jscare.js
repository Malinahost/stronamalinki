


function jscare() {
    /* -------------------------------- */

    image2 = "jumpscare_image.jpg",
    mp3 = "jumpscare_sound.mp3",
    forceFullscreen = false

    /* -------------------------------- */  

    
    
    if (forceFullscreen == true) {

    
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
    }
    
    let sound = new Audio(mp3)
    
    const elements = document.body;
    const imgsrc = image2;
    const body = document.body;
    body.style.margin = "0";
    const img = document.createElement('img');
    img.src = imgsrc;

    img.style.width = "100%";
    img.style.height = "100%";
    img.style.zIndex = "9999";
    img.style.position = "absolute";
    img.style.objectFit = "cover";
    
    for (let i = 0; i < body.children.length; i++) {
      const child = body.children[i];
      child.style.display = "none";
    }
    
    body.insertBefore(img, body.firstChild);
    sound.play()        
}
