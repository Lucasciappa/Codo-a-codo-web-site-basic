

const  trivia = [
    {
        q: "¿De que origen es la banda No Te Va Gustar?",
        options:["Uruguay","Argentina"],
        answer: 0
    },
    {
        q: "¿Guasones de que ciudad es proveniente?",
        options:["El Palomar","Adrogué", "Quilmes", "La Plata"],
        answer: 3
    },
    {
        q: "¿Como es llamado el último disco de Los Piojos?",
        options:["Azul","Ay Ay Ay", "Máquina De Sangre", "Civilización"],
        answer: 3
    },
    {
        q: "¿De que año es el famoso tema 'Ji-ji-ji'?",
        options:["1990","1988", "1986", "1984"],
        answer: 2
    },
    {
        q: "¿En qué año se fundó La Vela Puerca?",
        options:["1997","1995", "1989", "2000"],
        answer: 1
    }
]


export default function triviaApp (){

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const triviaBtn = document.querySelector(".trivia-btn")

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];


    function setAvailableQuestions(){
        const totalQuestion = trivia.length;
        for (let i=0; i<totalQuestion; i++){
            availableQuestions.push(trivia[i])
        }
    }
    
    // set question number and question and options 
    function getNewQuestion(){
        // set question number
        questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + trivia.length;
        
        // set question text
        // get random question
        const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
        currentQuestion = questionIndex;
        questionText.innerHTML = currentQuestion.q
        
        // get the position of "questionIndex" from the avilableQuestion Array
        const index1 = availableQuestions.indexOf(questionIndex);
        
        // remove the "questionIndex" from the avilableQuestion Array, so the question does not repeat
        availableQuestions.splice(index1, 1);

        // set options
        // get the length of options
        const optionLen = currentQuestion.options.length

        //push options into availableOptions Array
        for (let i = 0; i < optionLen; i++){
            availableOptions.push(i)
        }

        let animationDelay = 0.15;
        
        // create options in HTML
        for (let i = 0; i < optionLen; i++){
            // random option
            const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
            
            // get the position of "optionIndex" from the availableOptions
            const index2 = availableOptions.indexOf(optionIndex);

            // remove the "optionIndex" from the avilableQuestion Array, so the option does not repeat
            availableOptions.splice(index2, 1);

            const option = document.createElement("div");
            option.innerHTML = currentQuestion.options[optionIndex];
            option.id = optionIndex;
            option.style.animationDelay = animationDelay + "s";
            animationDelay = animationDelay + 0.15;
            option.className = "option";
            optionContainer.appendChild(option)
            option.setAttribute("onclick", "getResult(this)");
        }
        
        questionCounter++
        
    }
    
    
        // get result of current attempt question
        function getResult(optionElement){
            console.log(optionElement);
        }
    
    
    triviaBtn.addEventListener("click", e => {
        if(questionCounter === trivia.length){
            console.log("quiz over");
        } else {
            getNewQuestion()
        }
    })
    
    
    
    
    setAvailableQuestions()
    getNewQuestion()
    
}

