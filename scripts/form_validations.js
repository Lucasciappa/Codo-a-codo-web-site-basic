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

d.addEventListener("submit", e => {
    e.preventDefault()
    let suscriptionFormData = new FormData($form);
    let suscriptionObj = convertFormToTransactionObj(suscriptionFormData);
    // console.log(suscriptionObj);
    saveFromToObj(suscriptionObj);

});

function convertFormToTransactionObj(suscriptionFormData) {
    let formName = suscriptionFormData.get("name");
    let formLastName = suscriptionFormData.get("last-name");
    let formEmail = suscriptionFormData.get("email");
    let formSubject = suscriptionFormData.get("subject");
    let formComments = suscriptionFormData.get("comments");

    return {
    "formName": formName,
    "formLastName": formLastName,
    "formEmail": formEmail,
    "formSubject": formSubject,
    "formComments": formComments,
}

};

function saveFromToObj(suscriptionObj) {
    let contactArraySession = []
    contactArraySession.push(suscriptionObj)
    let contactObjJSONSession = JSON.stringify(contactArraySession);
    // console.log(contactObjJSONSession);
    sessionStorage.setItem("contactData", contactObjJSONSession);
    location.href = 'result-contacto.html';
};

}