const quizData = [
    {
        question: "1.What is the difference between == and === in JavaScript;",
        a: "=== is comparing the values after it casts the second one to the type of the first. == compare the type first, then the value;",
        b: "=== doesn't exist in JavaScript;",
        c: "there is no difference between == and ===;",
        d: "== is comparing the values after it casts the second one to the type of the first. === compare the type first, then the value;",
        correct: "d",
    },
    {
        question: "2.Which of the following are valid tags in the context of tables?",
        a: "tb, th, tr, tc;",
        b: "table, th, tr, td;",
        c: "tb, th, tr, td;" ,
        d: "table, thead, tbody, tcell;" , 
        correct: "b",
    },
    {
        question: "3.What would this selector select: div.class1, .class2?",
        a: `All the divs that have the class "class1" and all the elements that have the class "class2";`,
        b: `All the divs that have the class "class1" and all the divs that have the class "class2";`,
        c:`All the divs that have both the classes "1" and "2"; `,
        d:`All the divs that have both the classes "class1" and "class2"; `,
        correct: "a",
    },
    {
        question: "4.How do you create links to sections within the same page?;",
        a: "<a href=”?topmost”>BACK TO TOP</a>;",
        b: "<a href=”#topmost”>BACK TO TOP</a>;",
        c: "<a href=”topmost”>BACK TO TOP</a>;",
        d: "<a src=”#topmost”>BACK TO TOP</a>;",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>💁‍♀️You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
