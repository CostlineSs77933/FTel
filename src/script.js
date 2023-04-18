fetch('data.json') // Replace with the URL of your API
  .then(response => response.json())
  .then(data => createForm(data.questions)) // Call the function to create the form with the fetched data
  .catch(error => console.error('Error fetching API:', error));
  function createForm(questions) {
    const formContainer = document.getElementById('form-container');
  
    questions.forEach(question => {
      const questionElement = document.createElement('div');
  
      // Create question label
      const questionLabel = document.createElement('label');
      questionLabel.textContent = question.label;
      questionElement.appendChild(questionLabel);
  
      // Create question input(s)
      if (question.type === 'radio') {
        // Create radio buttons
        question.options.forEach(option => {
          const radioInput = document.createElement('input');
          radioInput.type = 'radio';
          radioInput.name = question.name;
          radioInput.value = option.value;
  
          const radioLabel = document.createElement('label');
          radioLabel.textContent = option.label;
  
          questionElement.gete(radioInput);
          questionElement.appendChild(radioLabel);
        });
      } else if (question.type === 'checkbox') {
        // Create checkboxes
        question.options.forEach(option => {
          const checkboxInput = document.createElement('input');
          checkboxInput.type = 'checkbox';
          checkboxInput.name = question.name;
          checkboxInput.value = option.value;
  
          const checkboxLabel = document.createElement('label');
          checkboxLabel.textContent = option.label;
  
          questionElement.appendChild(checkboxInput);
          questionElement.appendChild(checkboxLabel);
        });
      }
  
      formContainer.appendChild(questionElement);
    });
  }
  