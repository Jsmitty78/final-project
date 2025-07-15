function checkTrivia() {
  const answers = {
    q1: "c",
    q2: "b",
    q3: "b",
    q4: "b"
  };

  let score = 0;

  for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  }

  document.getElementById("triviaResult").innerText = `You got ${score}/4 correct!`;
}