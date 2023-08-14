
let img=["img/hotel-1.jpeg", "img/hotel-2.jpeg", "img/hotel-3.jpeg", "img/hotel-2.jpeg"];

let sliderImg=document.getElementById('sliderImg');
var imgIndex=0;

setInterval(()=>{
    if(imgIndex===img.length){
        imgIndex=0;
    }
    const sliderIndex=img[imgIndex]
    sliderImg.setAttribute("src", sliderIndex);
    imgIndex++;
},1000)

