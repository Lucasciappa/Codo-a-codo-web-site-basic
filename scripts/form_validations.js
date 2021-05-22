const d = document;


export default function contactFormValidations(){
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