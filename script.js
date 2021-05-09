/*   *** MENU ***  */


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
    scrollSpy()



});


function scrollTopButtom(btn) {
    const $scrollBtn = d.querySelector(btn);


    w.addEventListener("scroll", e => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if (scrollTop > 1000) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");

        }

        // console.log(w.pageYOffset, d.documentElement.scrollTop );
    })

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0,
                // left:0
            })
        }
    })

}




function scrollSpy() {

    const $sections = d.querySelectorAll("section[data-scroll-spy]")

    const cb = (entries) => {
        // console.log("entries", entries);

        entries.forEach(entry => {
            // console.log("entry",entry);
            const id = entry.target.getAttribute("id");
            if (entry.isIntersecting) {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");

            } else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        });
    }

    const observer = new IntersectionObserver(cb, {
        // root: 
        // rootMargin: "-350px",
          threshold: [0.333, 0.75]
    });

    $sections.forEach(el => observer.observe(el))

}



