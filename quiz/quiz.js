document.addEventListener('DOMContentLoaded', function() {
    const quizQuestions = [
      {
        question: "¿Cuál es el principal objetivo de la fase 'Informar' en el método de proyectos?",
        options: [
          "Evaluar los resultados finales del proyecto",
          "Recopilar las informaciones necesarias para resolver el problema",
          "Dividir el trabajo entre los miembros del grupo",
          "Comparar los resultados con el plan inicial"
        ],
        correct: 1,
        explanation: "Durante la primera fase los alumnos/aprendices recopilan las informaciones necesarias para la resolución del problema o tarea planteada, utilizando diferentes fuentes de información."
      },
      {
        question: "¿Qué caracteriza la fase de 'Planificación' en el método de proyectos?",
        options: [
          "La toma de decisiones sobre la estrategia a seguir",
          "La elaboración del plan de trabajo y la estructuración del procedimiento metodológico",
          "La discusión final y retroalimentación del proyecto",
          "La acción experiencial e investigadora"
        ],
        correct: 1,
        explanation: "La fase de planificación se caracteriza por la elaboración del plan de trabajo, la estructuración del procedimiento metodológico y la planificación de los instrumentos y medios de trabajo."
      },
      {
        question: "En la fase 'Decidir', ¿quiénes toman la decisión sobre la estrategia a seguir?",
        options: [
          "Solo el formador, que tiene la última palabra",
          "Solo los alumnos, que deben ser autónomos",
          "El formador y los miembros del grupo conjuntamente",
          "La dirección del centro educativo"
        ],
        correct: 2,
        explanation: "La decisión sobre la estrategia o procedimiento a seguir es una decisión conjunta entre el formador y los miembros del grupo del proyecto."
      },
      {
        question: "Durante la fase de 'Realización del proyecto', ¿qué pasa a ocupar un lugar prioritario?",
        options: [
          "La planificación detallada del trabajo",
          "La acción experiencial e investigadora",
          "La evaluación continua del proceso",
          "La toma de decisiones"
        ],
        correct: 1,
        explanation: "Durante la fase de realización del proyecto, la acción experiencial e investigadora pasa a ocupar un lugar prioritario. Se ejercita y analiza la acción creativa, autónoma y responsable."
      },
      {
        question: "¿Qué realizan los alumnos en la fase de 'Controlar'?",
        options: [
          "Una evaluación del trabajo de los demás grupos",
          "Una fase de autocontrol para evaluar la calidad de su propio trabajo",
          "Una nueva planificación para futuros proyectos",
          "Un informe detallado para el formador"
        ],
        correct: 1,
        explanation: "Una vez que han concluido la tarea, los alumnos mismos realizan una fase de autocontrol con el fin de aprender a evaluar mejor la calidad de su propio trabajo."
      },
      {
        question: "¿Cuál es la función principal del formador durante la fase de 'Valorar'?",
        options: [
          "Calificar el trabajo de cada alumno individualmente",
          "Facilitar a los participantes una retroalimentación sobre todo el proceso",
          "Planificar el siguiente proyecto",
          "Comparar el resultado con otros grupos de trabajo"
        ],
        correct: 1,
        explanation: "La función principal del formador es facilitar a todos los participantes una retroalimentación, no sólo sobre el producto final sino sobre todo el proceso: errores y éxitos logrados, rendimiento de trabajo, vivencias y experiencias."
      },
      {
        question: "¿Qué aspecto motivacional es importante durante la primera fase del método de proyectos?",
        options: [
          "Lograr un alto grado de identificación y de motivación con el proyecto",
          "Ofrecer recompensas por la finalización del proyecto",
          "Establecer una competición entre los diferentes grupos",
          "Asignar calificaciones individuales a cada tarea"
        ],
        correct: 0,
        explanation: "El planteamiento de los objetivos/tareas del proyecto ha de desarrollarse conjuntamente con todos los participantes con el fin de lograr un alto grado de identificación y de motivación de cara a la realización del proyecto."
      },
      {
        question: "¿Qué se debe disponer siempre durante la fase de planificación?",
        options: [
          "Un presupuesto detallado",
          "Un margen abierto para poder realizar adaptaciones o cambios",
          "Un calendario estricto e inamovible",
          "Una distribución jerárquica de responsabilidades"
        ],
        correct: 1,
        explanation: "Aunque debe seguirse en todo lo posible el procedimiento indicado en cada caso, es preciso disponer siempre de un margen abierto para poder realizar adaptaciones o cambios justificados por las circunstancias."
      },
      {
        question: "¿Qué deben aprender los alumnos durante la fase de toma de decisiones?",
        options: [
          "A seguir estrictamente las indicaciones del formador",
          "A valorar los problemas, riesgos y beneficios de cada alternativa",
          "A competir por la mejor solución individual",
          "A delegar responsabilidades en otros miembros del grupo"
        ],
        correct: 1,
        explanation: "Es importante que los alumnos aprendan a valorar los problemas, riesgos y beneficios asociados a cada una de las alternativas de entre las que se puede optar."
      },
      {
        question: "¿Cómo deben realizar las tareas los alumnos durante la fase de realización?",
        options: [
          "Siguiendo estrictamente las indicaciones del formador",
          "De la forma más autónoma posible",
          "Siempre en grupos para garantizar el trabajo colaborativo",
          "Con supervisión constante del formador"
        ],
        correct: 1,
        explanation: "La realización de las tareas o trabajo debe ser de la forma más autónoma posible, aunque esto no significa que los alumnos deben tener la sensación de que están solos."
      }
    ];
  
    const quizContent = document.getElementById('quiz-content');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const resultsDiv = document.getElementById('results');
    const progressBar = document.getElementById('progress-bar');
    const currentQuestionSpan = document.getElementById('current-question');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const totalQuestionsResultSpan = document.getElementById('total-questions-result');
    const scorePercentageSpan = document.getElementById('score-percentage');
    const correctAnswersSpan = document.getElementById('correct-answers');
    const feedbackMessageDiv = document.getElementById('feedback-message');
    const questionsReviewDiv = document.getElementById('questions-review');
    const restartBtn = document.getElementById('restart-btn');
  
    let currentQuestion = 0;
    const userAnswers = Array(quizQuestions.length).fill(null);
    let quizSubmitted = false;
  
    function initQuiz() {
      totalQuestionsSpan.textContent = quizQuestions.length;
      totalQuestionsResultSpan.textContent = quizQuestions.length;
      showQuestion(currentQuestion);
      updateNavButtons();
    }
  
    function showQuestion(index) {
      currentQuestionSpan.textContent = index + 1;
      progressBar.style.width = `${((index + 1) / quizQuestions.length) * 100}%`;
  
      const question = quizQuestions[index];
      
      let questionHTML = `
        <div class="question">
          <h2>${index + 1}. ${question.question}</h2>
          <div class="options">
      `;
      
      question.options.forEach((option, optIndex) => {
        const isSelected = userAnswers[index] === optIndex;
        let optionClass = 'option';
        
        if (quizSubmitted) {
          if (optIndex === question.correct) {
            optionClass += ' correct';
          } else if (isSelected && optIndex !== question.correct) {
            optionClass += ' incorrect';
          }
        } else if (isSelected) {
          optionClass += ' selected';
        }
        
        questionHTML += `
          <div class="${optionClass}" data-index="${optIndex}">
            <input type="radio" id="option-${index}-${optIndex}" name="question-${index}" ${isSelected ? 'checked' : ''} ${quizSubmitted ? 'disabled' : ''}>
            <label class="option-label" for="option-${index}-${optIndex}">
              ${option}
            </label>
          </div>
        `;
      });
      
      questionHTML += `</div>`;
      
      if (quizSubmitted) {
        questionHTML += `
          <div class="explanation">
            <p><strong>Explicación:</strong> ${question.explanation}</p>
          </div>
        `;
      }
      
      questionHTML += `</div>`;
      
      quizContent.innerHTML = questionHTML;
      
      if (!quizSubmitted) {
        document.querySelectorAll('.option').forEach(option => {
          option.addEventListener('click', () => {
            const optionIndex = parseInt(option.dataset.index);
            selectOption(index, optionIndex);
          });
        });
      }
    }
  
    function selectOption(questionIndex, optionIndex) {
      userAnswers[questionIndex] = optionIndex;
      showQuestion(questionIndex);
      updateNavButtons();
    }
  
    function updateNavButtons() {
      prevBtn.disabled = currentQuestion === 0;
      
      if (currentQuestion === quizQuestions.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
      } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
      }
  
      submitBtn.disabled = userAnswers.includes(null);
    }
  
    prevBtn.addEventListener('click', () => {
      if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
        updateNavButtons();
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
        updateNavButtons();
      }
    });
  
    submitBtn.addEventListener('click', () => {
      if (!userAnswers.includes(null)) {
        quizSubmitted = true;
        showResults();
      }
    });
  
    function showResults() {
      // Calculate score
      let correctCount = 0;
      userAnswers.forEach((answer, index) => {
        if (answer === quizQuestions[index].correct) {
          correctCount++;
        }
      });
      
      const scorePercentage = Math.round((correctCount / quizQuestions.length) * 100);
      scorePercentageSpan.textContent = `${scorePercentage}%`;
      correctAnswersSpan.textContent = correctCount;
      
      let feedbackMessage = '';
      if (scorePercentage >= 90) {
        feedbackMessage = "¡Excelente! Tienes un dominio sobresaliente del método de proyectos en la formación profesional.";
      } else if (scorePercentage >= 70) {
        feedbackMessage = "¡Muy bien! Comprendes adecuadamente los principales aspectos del método de proyectos.";
      } else if (scorePercentage >= 50) {
        feedbackMessage = "Aceptable. Tienes conocimientos básicos del método de proyectos, pero podrías mejorar en algunos aspectos.";
      } else {
        feedbackMessage = "Necesitas repasar más los conceptos del método de proyectos para comprender mejor su aplicación en la formación profesional.";
      }
      
      feedbackMessageDiv.textContent = feedbackMessage;
      let reviewHTML = '';
      
      userAnswers.forEach((answer, index) => {
        const question = quizQuestions[index];
        const isCorrect = answer === question.correct;
        
        reviewHTML += `
          <div class="question-review">
            <h4>
              <span class="${isCorrect ? 'correct' : 'incorrect'}">${isCorrect ? '✓' : '✗'}</span>
              Pregunta ${index + 1}: ${question.question}
            </h4>
            <p>Tu respuesta: ${question.options[answer]}</p>
            ${!isCorrect ? `<p>Respuesta correcta: <span class="correct-answer">${question.options[question.correct]}</span></p>` : ''}
            <p><em>${question.explanation}</em></p>
          </div>
        `;
      });
      
      questionsReviewDiv.innerHTML = reviewHTML;
      
      document.getElementById('quiz-content').classList.add('hidden');
      document.querySelector('.quiz-navigation').classList.add('hidden');
      resultsDiv.classList.remove('hidden');
    }
    restartBtn.addEventListener('click', () => {
     
      currentQuestion = 0;
      userAnswers.fill(null);
      quizSubmitted = false;
      resultsDiv.classList.add('hidden');
      document.getElementById('quiz-content').classList.remove('hidden');
      document.querySelector('.quiz-navigation').classList.remove('hidden');
      initQuiz();
    });
  
    initQuiz();
  });