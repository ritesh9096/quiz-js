const correctAnswer = ["C", "A", "A", "D", "D"];
const form = document.querySelector(".Quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".Question");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let score = 0;

  const userAnsers = [
    form.Q1.value,
    form.Q2.value,
    form.Q3.value,
    form.Q4.value,
    form.Q5.value,
  ];

  userAnsers.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 1;

      questions[index].classList.add("correct");
    } else {
      questions[index].classList.add("wrong");
    }
  });
 

  scrollTo(0, 0);

  result.classList.remove("hide");

  result.querySelector("p").textContent = `You Scored ${score}/5!`;
});

