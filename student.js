let students = [
  { name: "Ama", score: 85 },
  { name: "Kwame", score: 92 },
  { name: "Efua", score: 76 }
];

const tbody = document.querySelector("#scoreTable tbody");

students.forEach(student => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.name;

    const scoreCell = document.createElement("td");
    scoreCell.textContent = student.score;
    if (student.score > 80) {
        scoreCell.classList.add("green");
    }

    row.appendChild(nameCell);
    row.appendChild(scoreCell);
    tbody.appendChild(row);
});
