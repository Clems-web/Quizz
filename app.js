// ----- Variable Init -----
let startBtn = $("#start-btn");
let nextBtn = $("#next-btn");
let questionContainer = $("#question-container");
let questionElement = $("#question");
let answerBtnElement = $("#answers-btn");
let randomQuestion;
let actualQuestionIndex;
let goodAnswers;
let activate = true;
let result = document.createElement("p");
result.classList.add("para");

// ----- Button ------
    /* Launch game */
startBtn.click(startGame);

    /* Launch next question */
nextBtn.click(function () {
    $(".btn").addClass("hide");
    actualQuestionIndex++;
    showQuestion();
    activate = true;
});


// ----- Function's list -----
function startGame() {
    /* Hide every element inside the container and reset our result, very useful in case of a restart */
    $(".btn").addClass("hide");
    $("span").addClass("hide");
    $("p").addClass("hide");
    questionElement.removeClass("hide");
    result.innerHTML = "";

    /* Set correct answer's count to 0, also useful for restart */
    goodAnswers = 0;
    startBtn.addClass("hide");

    /* Set the order of question with a negative/positive number */
    randomQuestion = question.sort(()=> Math.random() - 0.5);
    actualQuestionIndex = 0;

    /* When the question is selected we make it appear like magic */
    questionContainer.removeClass("hide");
    setNextQuestion();
}

function setNextQuestion() {
    nextBtn.addClass("hide");
    showQuestion(randomQuestion[actualQuestionIndex]);
}

function showQuestion() {
    /*Here we make the question appears like said a little above */
    questionElement.html(question[actualQuestionIndex].question);

    /* Here we create a button for each answer (forEach) with their proper characteristics in the question array */
    question[actualQuestionIndex].answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerBtnElement.append(button);
    })
}
    /* Here is how we specific if the chosen answer is correct or not and we also use a boolean to avoid multiple selection */
function selectAnswer(e) {
    const selectedBtn = e.target;
    if (activate) {

        /* If yes --> goodAnswers +1 */
        if (selectedBtn.dataset.correct === "true") {
            goodAnswers++;
        }
        /* If not --> We stock the actual question + the correct answer */
        else {
            for (let x = 0; x < question[actualQuestionIndex].answer.length; x++) {
                if (question[actualQuestionIndex].answer[x].correct === true) {
                    result.innerHTML += question[actualQuestionIndex].question + "<br>" + " Réponse : " + question[actualQuestionIndex].answer[x].text + "<br>";
                }
            }

        }
    }
        /* With this, players can't cheat anymore, I guess ? */
    activate = false;

        /* Another important thing : we don't want to have a duplicate question so */
    if (randomQuestion.length > actualQuestionIndex + 1) {
        nextBtn.removeClass("hide");
    }
        /* If we have answered every question then you have the result + you can restart, i mean, if you want to */
    else {
        activate = true;
        $(".btn").addClass("hide");
        questionElement.addClass("hide");
        startBtn.html("Restart");
        startBtn.removeClass("hide");
        startBtn.click(function () {
            window.location.reload();
        });
        let spanCrea = document.createElement("span");
        let response = "réponses correctes : " + goodAnswers + "/10";
        spanCrea.style.fontSize = "2rem";
        spanCrea.innerHTML = response;
        answerBtnElement.append(spanCrea);
        answerBtnElement.append(result);
    }
}


// ----- Question's list -----
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
            { text: "Ver", correct: false },
            { text: "Vert", correct: true},
            { text: "Vers", correct: false},
            { text: "Verre", correct: false }
        ]
    },
    {
        question: "Quel est la phrase fétiche de Jerôme ?",
        answer: [
            { text: "On verra plus tard", correct: false },
            { text: "On verra ça plus tard", correct: true},
            { text: "Toggle", correct: false},
            { text: "Louise je travaille !", correct: false }
        ]
    },
    {
        question: "Combien y a-t-il de micro-onde dans la cafét ?",
        answer: [
            { text: "1", correct: false },
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "Je s'appelle Groot", correct: false }
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