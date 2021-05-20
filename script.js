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
    scrollSpy();
    contactFormValidations();
    juego()
    // responsiveMedia("youtube",
    //                 "(min-width: 1024px)",
    //                 `<a href="https://www.youtube.com/watch?v=ml5Xb3yNa4o" target="_blank">Click para ver Video en Youtube</a>`,
    //                 `<iframe width="560" height="315" src="https://www.youtube.com/embed/ml5Xb3yNa4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

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






function contactFormValidations(){
    const $form = d.querySelector(".form"),
     $inputs = d.querySelectorAll(".form [required]");
    


    $inputs.forEach((input) => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("form-error", "none")
        input.insertAdjacentElement("afterend", $span);

    });

    d.addEventListener("keyup", e=>{
        if(e.target.matches(".form [required]")){
            let $input = e.target,
             pattern = $input.pattern || $input.dataset.pattern;
        // console.log($input,pattern)
        if(pattern && $input.value !== ""){
            let regex = new RegExp(pattern);
            return !regex.exec($input.value)
             ? d.getElementById($input.name).classList.add("is-active")
             : d.getElementById($input.name).classList.remove("is-active")
        }
        
        if (!pattern){
            return $input.value === ""
             ? d.getElementById($input.name).classList.add("is-active")
             : d.getElementById($input.name).classList.remove("is-active")

        }
    }


    });

}

function juego(){
    let puntos = 0;
    let puntosNecesarios = 20;
    let segundos = 10;
    document.getElementById("tiempo").textContent = segundos;

    const sumarPuntos = ()=>{
        if (puntos >= puntosNecesarios) {
            alert("ganaste el juego");
            puntos = 0;
            segundos = 10;
        }
        else puntos ++;
        document.getElementById("puntos").textContent = puntos
    }

    const moverPersonaje = ()=>{
        const bot = document.querySelector(".bot");
        randomX = Math.random()*500;
        randomY = Math.random()*500;
        bot.style.top = `${randomY}px`;
        bot.style.left = `${randomX}px`;
    }

    document.querySelector(".bot").addEventListener("mouseenter",()=>{
        sumarPuntos();
        moverPersonaje();
    });

    setInterval(()=>{
        segundos--;
        document.getElementById("tiempo").textContent = segundos;
        if (segundos == 0) {
            alert("se te acabó el tiempo");
            puntos = 0;
            document.getElementById("puntos").textContent = puntos;
            segundos = 10;
        }
        
    } ,1000)
}


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



