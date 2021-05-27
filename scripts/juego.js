

export default function juego(){
    
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
        let randomX = Math.random()*350;
        let randomY = Math.random()*250;
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