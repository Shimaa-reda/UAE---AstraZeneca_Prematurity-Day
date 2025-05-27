//array of questions and answers
const questions = [
  {
    question: "What is the prevalence of Lupus worldwide?",
    options: [
      "Around 5 million people worldwide have a form of lupus.<sup>1</sup>",
      "Around 6 million people worldwide have a form of lupus.",
      "Around 10 million people worldwide have a form of lupus.",
      "Around 12 million people worldwide have a form of lupus.",
    ],
    answer: 0,
    image: "../assets/q1.png",
  },
  {
    question: "What proportion of adults diagnosed with lupus are women?",
    options: [
      "Approximately 9 out of 10 adults with lupus are women.<sup>1</sup>",
      "Approximately 8 out of 10 adults with lupus are women.",
      "Approximately 5 out of 10 adults with lupus are women.",
      "Approximately 3 out of 10 adults with lupus are women.",
    ],
    answer: 0,
    image: "../assets/q2.png",
  },
  {
    question: "How long does it usually take to diagnose lupus?",
    options: [
      "Around 12 months.",
      "Around 6 months.<sup>1</sup>",
      "Around 18 months.",
      "Around 10 months.",
    ],
    answer: 1,
    image: "../assets/q3.png",
  },
  {
    question: "What are the types of lupus?",
    options: [
      "Systemic lupus erythematosus (SLE), cutaneous lupus, drug-induced lupus,neonatal lupus.<sup>2</sup>",
      "Systemic lupus erythematosus (SLE), cutaneous lupus.",
      "Systemic lupus erythematosus (SLE), cutaneous lupus, drug-induced lupus.",
      "Systemic lupus erythematosus (SLE), cutaneous lupus, neonatal lupus.",
    ],
    answer: 0,
    image: "../assets/q4.png",
  },
  {
    question: "What is the most common type of lupus?",
    options: [
      "Systemic lupus erythematosus (SLE) is the most common type.<sup>3</sup>",
      "Cutaneous lupus is the most common type.",
      "Drug-induced lupus is the most common type.",
      "Neonatal lupus is the most common type.",
    ],
    answer: 0,
    image: "../assets/q5.png",
  },
  {
    question: "Why is the butterfly a symbol for lupus?",
    options: [
      "Because butterflies are nocturnal like lupus symptoms.",
      "Because many lupus patients develop a butterfly-shaped rash across their cheeks and nose.<sup>2</sup>",
      "Because butterfly wings resemble the shape of red blood cells affected by lupus.",
      "Because the butterfly represents transformation, similar to lupus treatment.",
    ],
    answer: 1,
    image: "../assets/q6.png",
  },
  {
    question:
      "Why is purple the characteristic colour for Lupus Awareness Day?",
    options: [
      "Because it represents the bruising that lupus patients commonly experience.",
      "Because purple was chosen by the World Health Organization to represent autoimmune diseases.",
      "Because it reflects the skin manifestations seen in some forms of lupus, such as pink- to violet-colored papules.<sup>4</sup>",
      "Because purple is associated with royalty, symbolizing the strength of lupus patients.",
    ],
    answer: 2,
    image: "../assets/q7.png",
  },
  {
    question: "What are the common symptoms experienced by people with lupus?",
    options: [
      "Sudden memory loss, uncontrollable shaking, and vision loss.",
      "Frequent urination, increased appetite, coughing, and night sweats.",
      "High blood pressure, excessive weight gain, blurred vision, and dry mouth.",
      "A butterfly-shaped rash on the cheeks and nose, fatigue, swollen joints, headache, low-grade fever, sensitivity to sunlight, hair loss, and chest pain.<sup>2</sup>",
    ],
    answer: 3,
    image: "../assets/q8.png",
  },
  {
    question:
      "What is the origin of the word “lupus,” and why was the disease named that?",
    options: [
      "The word “lupus” is derived from a Greek term meaning “red skin,” referring to the rash.",
      "The word “lupus” comes from the Latin word for “wolf,” because early physicians believed the facial rash resembled a wolf’s bite or the shape of a wolf mask.<sup>2</sup>",
      "“Lupus” was named after a 17th-century physician, Dr. Lupinius, who first described the disease.",
      "The term “lupus” refers to the moon, symbolizing the cyclical nature of symptoms.",
    ],
    image: "../assets/q9.png",
    answer: 1,
  },
  {
    question: "At what age does lupus usually appear?",
    options: [
      "Only in individuals over the age of 60.",
      "Primarily in infants and toddlers.",
      "Between the ages of 15 and 45, though it can occur in childhood or adolescence.<sup>1,5</sup>",
      "Between the ages of 5 and 10 in most cases.",
    ],
    image: "../assets/q10.png",
    answer: 2,
  },
  {
    question: "Do you think, Lupus is primarily what type of disease?",
    options: [
      "Genetic disorder.",
      "Autoimmune disease.<sup>1</sup>",
      "Infectious disease.",
      "Metabolic disorder.",
    ],
    image: "../assets/q11.png",
    answer: 1,
  },
  {
    question:
      "What laboratory finding is most commonly positive in lupus patients?",
    options: [
      "ANA (Antinuclear Antibody).<sup>5</sup>",
      "Elevated glucose levels.",
      "CRP.",
      "Peripheral TLC.",
    ],
    image: "../assets/q12.png",
    answer: 0,
  },
  {
    question: "What are the triggers that can worsen lupus symptoms?",
    options: [
      "Eating spicy food, loud noises, and caffeine.",
      "Cold weather, daily exercise, and dairy products.",
      "Traveling by air, warm baths, and high humidity.",
      "Sunlight exposure, infections and stress.<sup>5</sup>",
    ],
    image: "../assets/q13.png",
    answer: 3,
  },
  {
    question:
      "What is the difference between systemic lupus erythematosus and cutaneous lupus erythematosus?",
    options: [
      "SLE affects internal organs, while cutaneous lupus is limited to the skin.<sup>4</sup>",
      "SLE only affects the skin, and cutaneous lupus targets joints.",
      "There is no difference; the names are interchangeable.",
      "Cutaneous lupus always develops into SLE.",
    ],
    image: "../assets/q14.png",
    answer: 0,
  },
  {
    question: "What are the systemic complications of lupus?",
    options: [
      "Appendicitis, gallstones, and sinus infections.",
      "Lupus nephritis, CNS involvement (e.g., seizures, psychosis), pericarditis, pulmonary hemorrhage, and thrombosis.<sup>4</sup>",
      "Migraine, asthma, and eczema.",
      "Broken bones, hair loss, and acne.",
    ],
    image: "../assets/q15.png",
    answer: 1,
  },
];

// Get references to the HTML elements
const questionElement = document.getElementById("question");
const optionContainer = document.getElementById("answer-section");
const submitButton = document.getElementById("submit");
const numberElement = document.querySelector(".number");
let currentQuestionIndex = 0;

// Display the current question and options
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  // Set question number
  numberElement.textContent = currentQuestionIndex + 1;

  // Display question image (if available)
  const questionImage = document.getElementById("question-image");
  if (currentQuestion.image) {
    questionImage.src = currentQuestion.image;
    questionImage.style.display = "block";
  } else {
    questionImage.style.display = "none";
  }

  // Clear previous options
  optionContainer.innerHTML = "";

  // Create a list element
  const optionList = document.createElement("ul");
  optionList.className = "list-unstyled"; // Bootstrap class to remove default padding

  // Create and append list items
  for (let i = 0; i < currentQuestion.options.length; i++) {
    const listItem = document.createElement("li");
    listItem.className = "mb-3 "; 

    const optionInput = document.createElement("input");
    optionInput.className = "form-check-input me-2 .........................";
    optionInput.type = "radio";
    optionInput.name = "answer";
    optionInput.id = `answer${i + 1}`;
    optionInput.value = i;

    const optionLabel = document.createElement("label");
    optionLabel.className = "form-check-label";
    optionLabel.setAttribute("for", `answer${i + 1}`);
    optionLabel.innerHTML = currentQuestion.options[i];

    listItem.appendChild(optionInput);
    listItem.appendChild(optionLabel);

    optionList.appendChild(listItem);
  }

  optionContainer.appendChild(optionList);
}


// Check if the user's answer is correct
function checkAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  // const childImage = document.querySelector('.child');
  const submitButton = document.getElementById("submit");

  submitButton.style.backgroundColor = "#493A96";
  submitButton.style.color = "#ffffff";

  if (selectedOption) {
    const userAnswer = parseInt(selectedOption.value);
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
      // childImage.src = '../assets/correct_ans_baby.png';
      selectedOption.parentElement.style.fontWeight = "bold";
      selectedOption.classList.add("correct");

      // Apply style for the selected option text,checked radio (green for correct answer)
      selectedOption.parentElement.style.color = "#36CC60";

      selectedOption.style.backgroundColor = "#36CC60";
      selectedOption.style.borderColor = "#36CC60";

      // Move to the next question after 2 seconds
      setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          displayQuestion();
        } else {
          window.location.href = "end.html"; // Navigate to the end page
        }
      }, 2000);
    } else {
      // childImage.src = '../assets/wrong_ans_baby.png';
      selectedOption.parentElement.style.fontWeight = "700";

      // Apply style for the selected option text,checked radio  (red for incorrect answer)
      selectedOption.parentElement.style.color = "#E17373";
      selectedOption.classList.add("incorrect");

      selectedOption.style.backgroundColor = "#E17373";
      selectedOption.style.borderColor = "#E17373";

      // Disable the submit button and set the disabled state of the selected option
      submitButton.style.backgroundColor = "#B3B3B3";
      submitButton.style.color = "#ffffff";

      // Clear the selected option after 5 seconds
      setTimeout(() => {
        selectedOption.checked = false;
        selectedOption.disabled = false;
        selectedOption.classList.remove("incorrect");
        selectedOption.parentElement.style.fontWeight = "";

        // childImage.src = '../assets/default_baby.png';
        // Reset button
        submitButton.style.backgroundColor = "#493A96";
        submitButton.style.color = "#ffffff";
        // Reset style for the selected option text and style
        selectedOption.parentElement.style.color = "";
        selectedOption.style.backgroundColor = "";
        selectedOption.style.borderColor = "";
      }, 5000);
    }
  }
}

// Add event listener to the submit button
submitButton.addEventListener("click", checkAnswer);

// Start the game
displayQuestion();
