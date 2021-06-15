import scrollTopButtom from "./scripts/scroll_btn.js";
import scrollSpy from "./scripts/scroll_spy.js";
import contactFormValidations from "./scripts/form_validations.js";
import resultContactForm from "./scripts/result_form.js";
import triviaApp from "./scripts/trivia.js";


const d = document,
    w = window;

((d) => {
    const $btnMenu = d.querySelector(".menu-boton"),
        $nav = d.querySelector(".nav");

    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $nav.classList.toggle("is-active")
    });
})(d);

d.addEventListener("DOMContentLoaded", e => {
    console.log(location.pathname);
    // if(location.pathname === "/result_contacto.html"){
    //     resultContactForm();
    // }
    if(location.pathname === "/index.html"){
        scrollTopButtom(".scroll-top-btn");
        scrollSpy();
    }if(location.pathname === "/trivia.html"){
        triviaApp()
    }if(location.pathname === "/contacto.html"){
        contactFormValidations();
    } if(location.pathname === "/result-contacto.html"){
        resultContactForm();
    } else {

    }
    // slider()
    // responsiveMedia("youtube",
    //                 "(min-width: 1024px)",
    //                 `<a href="https://www.youtube.com/watch?v=ml5Xb3yNa4o" target="_blank">Click para ver Video en Youtube</a>`,
    //                 `<iframe width="560" height="315" src="https://www.youtube.com/embed/ml5Xb3yNa4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

});


