let body = document.querySelector('body');

window.onload = () => {
    body.style.opacity = 1;
    document.getElementById("focused").focus();
};

let modal = document.querySelector('.images-modal');
let imgs = document.getElementsByClassName('img');
let modalImg = document.querySelector(".img-modal");

for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    img.onclick = () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    };
}

let modalClose = document.querySelector(".images-modal-close");
modalClose.onclick = () => modal.style.display = "none";
