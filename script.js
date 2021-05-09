/*   *** MENU ***  */


((d) => {
    const $btnMenu = d.querySelector(".menu-boton"),
     $nav = d.querySelector(".nav");

    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $nav.classList.toggle("is-active")
    });


})(document);