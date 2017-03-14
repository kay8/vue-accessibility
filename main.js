// Based on 'Create a quiz with Vue.js'
// https://medium.com/@rap2h/create-a-quiz-with-vue-js-ed1e8e0e8294#.exyuo7pjh


// Create a quiz object with a title and two questions.
// A question has one or more answer, and one or more is valid.
var quiz = {
  title: 'Test',
  questions: [
    {
      text: "Question 1",
      responses: [
        {
        	text: 'Wrong answer 1',
        	desc: "Wrong 1: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      	}, 
        {
        	text: 'Right answer 1', 
        	desc: "Right 2: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        	correct: true
      	}, 
      ]
    }, {
      text: "Question 2",
      responses: [
        {
        	text: 'Right answer 2', 
        	desc: "Right 2: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        	correct: true
        }, 
        {
        	text: 'Wrong answer 2',
        	desc: "Wrong 2: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, 
      ]
    } 
  ],
};
      
new Vue({
  el: '#app',
  data: {
    quiz: quiz,
    // Store current question index
    questionIndex: 0,
    // An array initialized with "false" values for each question
    // It means: "did the user answered correctly to the question n?" "no".
    userResponses: Array(quiz.questions.length).fill(false),
    buttonClicked: false,
    descContent: ''
  },
  // The view will trigger these methods on click
  methods: {
    // Go to next question
    next: function() {
    	this.buttonClicked = false;
      this.questionIndex++;
    },
    // Go to previous question
    prev: function() {
      this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function() {
      return this.userResponses.filter(function(val) { return val }).length;
    },
    showDesc: function(desc) {
    	this.buttonClicked = true;
    	this.descContent = desc;
    }
  }
});