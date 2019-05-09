let links = document.getElementsByClassName('animated-transition');
let body = document.querySelector('body');

Array.from(links).forEach((link) => {
    link.addEventListener('click', event => {
        event.preventDefault();
        let element = event.target;
        let href = element.href;
        body.style.opacity = 0;
        setTimeout(()=>{
            window.location.href = href;
        }, 700)
    });
});


