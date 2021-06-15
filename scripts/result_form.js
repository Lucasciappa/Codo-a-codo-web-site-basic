export default function resultContactForm(){
    const $name = document.getElementById("name"),
    $lastName = document.getElementById("lastName"),
    $email = document.getElementById("email"),
    $subject = document.getElementById("subject"),
    $comments = document.getElementById("comments");

 let dataJSON = sessionStorage.getItem("contactData")
// console.log(dataJSON);

let dataOBJ = JSON.parse(dataJSON)
// console.log(dataOBJ);

$name.innerText = (`${dataOBJ[0].formName}`)
$lastName.innerText = `${dataOBJ[0].formLastName}`;
$email.innerText = `${dataOBJ[0].formEmail}`;
$subject.innerText = `${dataOBJ[0].formSubject}`;
$comments.innerText = `${dataOBJ[0].formComments}`;
}