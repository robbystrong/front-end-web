function quiz(){
	let score = 0;
	let num;
	let question;
  let answer;
	let quiz_questions = [
	  'How many moons does Earth have?',
	  'How many moons does Saturn have?',
	  'How many moons does Venus have?'
	];
	let quiz_answers = [1, 82, 0];

	//get total number of questions
	let totalQuestion = quiz_questions.length;

	//generate random number for question
  num = Math.floor(Math.random() * 3);

	for(count = 0; count < totalQuestion; count++)
  {
		question = quiz_questions[num];
		answer = prompt(question);
		if(!answer && answer!="")
		{
			document.write("<p>Quiz Canceled</p>");
			return;
		}
		if (answer == quiz_answers[num] && answer) {
			score++;
			alert("Correct!");
		} else {
			alert("Wrong");
		}
		num++;
		if (num == totalQuestion) {
			num = 0;
    }
  }

  document.write("<p>You got " + score.toString() +" out of " + totalQuestion.toString() +" questions correct.</p>");
}
