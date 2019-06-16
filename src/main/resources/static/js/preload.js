import { doAjaxCall } from "./ajaxTool.js";
import { initSlider} from "./main-arts.js";

document.getElementById('preload-link').onclick = () => {
    document.getElementById("preload-text-container").style.opacity = "0";
    document.querySelector(".slides").style.filter = "grayscale(0%)";

    let begin = new Date().getMilliseconds();
    doAjaxCall("/main?preload=true").then((response) => {
        let end = new Date().getMilliseconds();
        let diff = end - begin;
        let delay = diff < 2100 ? 2100 - diff : 0;
        setTimeout(function () {
            document.getElementById("preload-text-container").style.display = "none";
            let sliderContainer = document.querySelector('.slides');
            sliderContainer.insertAdjacentHTML('beforeend', response);
            initSlider();
            document.querySelector('.footer-container').style.display = 'block';
            document.querySelector('.header-container').style.display = 'block';
        }, delay);
    });
};