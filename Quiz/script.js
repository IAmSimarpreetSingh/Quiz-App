const quizData = [
    {
        question : 'Inside which HTML element do we put the JavaScript?',
        a : '<scripting>',
        b : '<script>',
        c : '<js>',
        d : '<javascript>',
        correct : 'b'
    }, {
        question : 'What is the correct JavaScript syntax to change the content of the HTML element below?',
        a : '#demo.innerHTMl = "Hello World"',
        b : 'document.getElementByName("p").innerHTML = "HelloWorld"',
        c : 'document.getElement("p").innerHTML = "HelloWorld"',
        d : 'document.getElementById("demo").innerHTML = "HelloWorld"',
        correct : 'd'
    }, {
        question : 'Where is the correct place to insert a JavaScript?',
        a : 'The <body> section',
        b : 'Both the <body> and <body> section are correct',
        c : 'The <head> section',
        d : 'Anywhere',
        correct : 'b'
    }, {
        question : 'What is the correct syntax for referring to an external script called "xxx.js"?',
        a : '<script src="xx.js">',
        b : '<script href="xx.js">',
        c : '<script name="xx.js">',
        d : '<link href=xx.js>',
        correct : 'a'
    }, {
        question : 'The external JavaScript file must contain the <script> tag.',
        a : 'True',
        b : 'False',
        c : 'Both',
        d : 'Dont know',
        correct : 'b'
    }
]

const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const showAnswerBtn = document.getElementById('showAnswer');
const theAnswer = document.getElementById('theAnswer');


let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    showAnswer();

}

function getSelected() {

    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if(answerEl.checked){
            answer =  answerEl.id;
            
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
        theAnswer.innerHTML = '';
    }); 
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {

        if (answer === quizData[currentQuestion].correct){
            score ++
        }

        currentQuestion ++;
        
        if(currentQuestion < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
                <h2>You Answered Correctly at ${score}/${quizData.length} questions.</h2> 

                <button id="submit" onClick="location.reload()">Relod</button>

            `;
        }
    }
});

function showAnswer () {
    showAnswerBtn.addEventListener('click', () => {
        theAnswer.innerHTML = quizData[currentQuestion].correct;
    })
}
