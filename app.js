let startBtn = $("#start-btn");
let nextBtn = $("#next-btn");
let questionContainer = $("#question-container");
let questionElement = $("#question");
let answerBtnElement = $("#answers-btn");

let randomQuestion;
let actualQuestionIndex;
let goodAnswers;
let result = document.createElement("p");
result.classList.add("para")

startBtn.click(startGame);
nextBtn.click(function () {
    $(".btn").addClass("hide");
    actualQuestionIndex++;
    showQestion();
})

function startGame() {
    $(".btn").addClass("hide");
    $("span").addClass("hide");
    $("p").addClass("hide");
    goodAnswers = 0;
    startBtn.addClass("hide");
    randomQuestion = question.sort(()=> Math.random() - 0.5);
    actualQuestionIndex = 0;
    questionContainer.removeClass("hide");
    setNextQuestion();
}

function setNextQuestion() {
    reset();
    showQestion(randomQuestion[actualQuestionIndex]);
}
function showQestion() {
    questionElement.html(question[actualQuestionIndex].question);

    question[actualQuestionIndex].answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
        answerBtnElement.append(button);
    })
}

function reset() {
    nextBtn.addClass("hide");
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct;

    if (selectedBtn.dataset = correct) {
        goodAnswers++;
    }
    else {
        let tableauTampon = [];
        let stringTampon;
        for (let x = 0; x < question[actualQuestionIndex].answer.length; x++) {
            if (question[actualQuestionIndex].answer[x].correct === true) {
                tableauTampon.push(question[actualQuestionIndex].answer[x].text);
                stringTampon += tableauTampon[x] + " ";
                console.log(stringTampon);
            }
        }
        result.innerHTML += question[actualQuestionIndex].question + " Réponse : " + stringTampon + "<br>";
    }

    if (randomQuestion.length > actualQuestionIndex + 1) {
        nextBtn.removeClass("hide");
    } else {
        startBtn.html("Restart");
        startBtn.removeClass("hide");
        let spanCrea = document.createElement("span");
        let response = "réponses correctes : " + goodAnswers + "/10";
        spanCrea.style.fontSize = "1rem";
        spanCrea.innerHTML = response;
        answerBtnElement.append(spanCrea);
        answerBtnElement.append(result);

    }
}

const question = [
    {
        question: "Quel est le résultat de 2+2 ?",
        answer: [
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false},
            { text: "7", correct: false}
        ]
    },
    {
        question: "Quel personnage de l'univers Marvel représente Mika ?",
        answer: [
            { text: "Un Ent", correct: false },
            { text: "Une branche", correct: false},
            { text: "Groot", correct: true},
            { text: "Je s'appelle Groot", correct: true }
        ]
    },
    {
        question: "Quel est le surnom de Mickado ?",
        answer: [
            { text: "Point lenght ?", correct: false },
            { text: "Micka ?", correct: false},
            { text: "Groot", correct: false},
            { text: "Dot lenght", correct: true }
        ]
    },
    {
        question: "Combien d'exercice avons-nous effectué depuis le début de la formation ?",
        answer: [
            { text: "50", correct: false },
            { text: "100", correct: false},
            { text: "200", correct: false},
            { text: "Un certain nombre", correct: true }
        ]
    },
    {
        question: "Quel est la couleur préférée de Matthias ?",
        answer: [
            { text: "Le verre", correct: false },
            { text: "le vert", correct: true},
            { text: "le vers", correct: false},
            { text: "le verre", correct: false }
        ]
    },
    {
        question: "Quel est la phrase fétiche de Jerôme ?",
        answer: [
            { text: "On verra plus tard", correct: false },
            { text: "On verra ça plus tard", correct: true},
            { text: "toggle", correct: false},
            { text: "Louise je travaille !", correct: false }
        ]
    },
    {
        question: "Combien y a-t-il de micro-onde dans la cafét ?",
        answer: [
            { text: "1", correct: false },
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "Je s'appelle Groot", correct: true }
        ]
    },
    {
        question: "Combien de cigarettes Dot Length a-t-il fumé depuis lundi ?",
        answer: [
            { text: "0", correct: true },
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "Tout plein en scred", correct: false }
        ]
    },
    {
        question: "De quel couleur était le cheval blanc d'Henri IV ?",
        answer: [
            { text: "Sérieux... ?", correct: false },
            { text: "Blanc", correct: true},
            { text: "Alesan", correct: false},
            { text: "Whitesmoke", correct: true }
        ]
    },
    {
        question: "Combien de cigarettes Samuel fume-t-il à chaque fois ?",
        answer: [
            { text: "1", correct: false },
            { text: "0, Il ne fume pas", correct: false},
            { text: "12", correct: false},
            { text: "2", correct: true }
        ]
    }
]