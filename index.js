const questions = [
  {
    question: "html stand for",
    a: "hyper text markup language",
    b: "hyper tweet make language",
    c: "hyper markup language",
    d: "hype tect mark language",
    correct: "a",
  },
  {
    question: "Which type of JavaScript language is ___",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    correct: "b",
  },
  {
    question:
      "Which one of the following also known as Conditional Expression:",
    a: "Alternative to if-else",
    b: "Switch statement",
    c: "If-then-else statement",
    d: "immediate if",
    correct: "d",
  },
  {
    question: "In JavaScript, what is a block of statement?",
    a: "Conditional block",
    b: "block that combines a number of statements into a single compound statement",
    c: "both conditional block and a single statement",
    d: "block that contains a single statement",
    correct: "b",
  },
];
let index = 0;
let total = questions.length;
let correct = 0;
let right = 0;
let wrong = 0;
const quebox = document.getElementById("quebox");
const optioninput = document.querySelectorAll(".options");

const loadquestion = () => {
    if(index==total){
        return endquiz();
    }
    reset();
  const data = questions[index];
  quebox.innerHTML = `${index + 1})${data.question}`;
  optioninput[0].nextElementSibling.innerHTML = data.a;
  optioninput[1].nextElementSibling.innerHTML = data.b;
  optioninput[2].nextElementSibling.innerHTML = data.c;
  optioninput[3].nextElementSibling.innerHTML = data.d;
  
};
const submitquiz = () => {
  const data = questions[index];
  const ans = getanswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadquestion();
  return;
};
const getanswer = () => {
    let answer;
  optioninput.forEach((input) => {
    if (input.checked) {
        console.log(input);
      answer= input.value;
    }
  })
  return answer;
}
const reset=()=>{
    optioninput.forEach((input) => {
    
        input.checked=false;
        
      })
}
const endquiz=()=>{
    document.getElementById("box").innerHTML = `<h3>Thank you for playing quiz</h3> <h2>${right}/${total} are correct</h2> <button onclick="location.reload()">Play again</button>`;


 
}
loadquestion();
