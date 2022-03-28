const quizData = [
  {
    question: 'Où vivent les Simpson?',
    a: 'Springflied',
    b: 'New York',
    c: 'Fairview',
    d: 'Gotham City',
    correct: 'a',
  },
  {
    question:
      "Je vie sous l' eau, sous un rocher, je suis rose et porte un short vert. Qui suis-je?",
    a: 'Professeur Oak',
    b: 'Reginald Fletcher',
    c: 'Samy',
    d: 'Patrick ',
    correct: 'd',
  },
  {
    question:
      "Comment s'appellaient les 3 detectives faisant parties d'une organisation secrète de protection de l'humanité ?",
    a: "Destiny's Child",
    b: 'TLC',
    c: 'Totally Spies',
    d: 'Inspecteur Gogo Gadjet',
    correct: 'c',
  },
  {
    question: "Quel est le nom du meilleur ami d'Harry Potter?",
    a: 'Ron',
    b: 'Drago',
    c: 'Jon Snow',
    d: 'Jason',
    correct: 'a',
  },
];

// declare les variables principales et les cibler dans le html
const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');

// declarer les variables réponses et les cibler
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');

// declarer le bouton submit

let currentQuiz = 0;
let score = 0;

// verifie sur chaque aswer si la reponse checkted est fause
const deselectAnswer = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
  let answer;
  answerElements.forEach((answerElements) => {
    if (answerElements.checked) answer = answerElements.id;
  });
  return answer;
};
const loadQuiz = () => {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `  
       <h2>You answered ${score}/${quizData.length} questions correctly</h2>  
       <button onclick="history.go(0)">Play Again</button>  
     `; // location.reload()
    }
  }
});
