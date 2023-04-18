const container = document.getElementById("question-container");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const questions = data.questions;

    questions.forEach((question) => {
      const group = document.createElement("group");
      const label = document.createElement("label");
      const input = document.createElement(question.type);

      label.textContent = question.label;
      input.name = question.name;

      question.options.forEach((option) => {
        const optionLabel = document.createElement("label");
        const optionInput = document.createElement("input");

        optionLabel.textContent = option.label;
        optionInput.value = option.value;
        optionInput.type = question.type;

        group.appendChild(optionInput);
        group.appendChild(optionLabel);
      });

      group.appendChild(input);
      group.appendChild(label);

      container.appendChild(group);
    });
  });
