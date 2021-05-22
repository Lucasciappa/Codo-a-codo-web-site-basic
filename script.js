import contactFormValidations from "./scripts/form_validations.js";
import juego from "./scripts/juego.js";
import scrollTopButtom from "./scripts/scroll_btn.js";
import scrollSpy from "./scripts/scroll_spy.js"


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

    scrollTopButtom(".scroll-top-btn");
    scrollSpy();
    contactFormValidations();
    juego();
    // slider()
    // responsiveMedia("youtube",
    //                 "(min-width: 1024px)",
    //                 `<a href="https://www.youtube.com/watch?v=ml5Xb3yNa4o" target="_blank">Click para ver Video en Youtube</a>`,
    //                 `<iframe width="560" height="315" src="https://www.youtube.com/embed/ml5Xb3yNa4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

});





// function slider(){
//     const $nextBtn = d.querySelector(".slider-btns .next"),
//      $prevBtn = d.querySelector(".slider-btns .prev"),
//      $slides = d.querySelectorAll(".slider-slide");

//      let i = 0;
//      d.addEventListener("click", e => {
//          if(e.target === $prevBtn){
//              e.preventDefault();
//              $slides[i].classList.remove("active");
//              i--;
        
//              if(i < 0){
//                  i = $slides.length -1;
//              }
//              $slides[i].classList.add("active");
 
//          }
//          if(e.target === $nextBtn){
//              e.preventDefault();
//              $slides[i].classList.remove("active");
//              i++;
        
//              if(i > $slides.length -1){
//                  i = 0;
//              }
//              $slides[i].classList.add("active");
 
//          }
//      })
// }




// function responsiveMedia(id, mq, mobileContent, desktopContent){
//     let breakpoint = w.matchMedia(mq);


//     const responsive = (e) => {
//         if(e.matches){
//             document.getElementById(id).innerHTML = desktopContent;
        
//         } else {
//             document.getElementById(id).innerHTML = mobileContent;
//         }

//         console.log(e.matches)
//     }
//         breakpoint.addListener(responsive);
//         responsive(breakpoint);
// }



