const questionInput = document.getElementById("question");
const answerElement = document.getElementById("answer");
const answerButton = document.getElementById("answerBtn");
 
function eightball() {
  const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "Trust me, you don't wanna know, capish'.",
    "Yes, but it's going to hurt in a way you didn't expect.",
    "Piss off!",
  ];

  questionInput.innerHTML = "";
  answerButton.addEventListener("click", () => {
    answerElement.innerHTML = "";
    const randomIndex = Math.floor(Math.random() * answers.length);
    answerElement.textContent = answers[randomIndex];
  });
}