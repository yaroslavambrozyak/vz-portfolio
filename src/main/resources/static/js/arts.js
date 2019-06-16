import {doAjaxCall} from "./ajaxTool.js";

window.onload = () => {
    document.querySelector('body').style.opacity = 1;
};

let artsContainer = document.querySelector('.arts-container');
let typeLinks = document.querySelectorAll('.type-link');

for (let i = 0; typeLinks.length; i++) {
    let typeLink = typeLinks[i];
    typeLink.addEventListener('click', (link) => {
        let target = link.target;
        let activeLink = document.querySelector('.type-link.active');
        activeLink.classList.remove('active');
        target.classList.add('active');

        artsContainer.style.opacity = 0;
        doAjaxCall("/?type=" + target.innerHTML).then(res => {
            artsContainer.innerHTML = res;
            artsContainer.style.opacity = 1;
        })
    });
}


function onTypeLinkClick(clickedLink) {
    let activeLink = document.querySelector('.active');
    activeLink.classList.remove('active');
    clickedLink.classList.add('active');
    let href = '/arts';
    artsContainer.style.opacity = 0;
    doAjaxCall(href).then((response) => {
        artsContainer.innerHTML = response;
        artsContainer.style.opacity = 1;
    })
}

