var i = 0;
var images = [];
var time = 3000;

images [0] = "assets/image/01.png";
images [1] = "assets/image/02.png";
images [2] = "assets/image/03.png";
images [3] = "assets/image/04.png";
images [4] = "assets/image/05.png";

function changeImg() {
    document.slide.src = images [i];

    if (i < images.length - 1) {
        i++
    }
    else {
        i = 0;
    }
    setTimeout ("changeImg()", time);
}

window.onload = changeImg;
