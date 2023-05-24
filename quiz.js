var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What was an early version of YouTube called?",
    "options": [
    {
    "a": "Tune In Hook Up",
    "b": "Share your World",
    "c": "Universal Tube",
    
    }
    ],
    "answer": "Tune In Hook Up",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "When was Twitter launched?",
    "options": [
    {
    "a": "March2006",
    "b": "July2006",
    "c": "June2006"
    }
    ],
    "answer": "July2006",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What is SMS?",
    "options": [
    {
    "a": "Short message service",
    "b": "Second message service",
    "c": "Sent message service"
    }
    ],
    "answer": "Short message service",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which is the home city of twitter?",
    "options": [
    {
    "a": "California",
    "b": "New York",
    "c": "San Francisco"
    }
    ],
    "answer": "San Francisco",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "What was the name of snapchat when it started as a prototype?",
    "options": [
    {
    "a": "Picaboo",
    "b": "Photochat",
    "c": "Polaroid",
    }
    ],
    "answer": "Picaboo",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "EULA stands for?",
    "options": [
    {
    "a": "End User Leave Argument",
    "b": "End User License Aim",
    "c": "End User License Agreement",
    "d": "None of the Above",
    }
    ],
    "answer": "End User License Agreement",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "ICERT stands for?",
    "options": [
    {
    "a":"Indian Computer Emergency Response Team",
    "b": "Indian Council OF Education and Research Team",
    "c": "Indian Cyber Emergency Response Team",
    }
    ],
    "answer": "Indian Computer Emergency Response Team",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "Which was the first social media site?",
    "options": [
    {
    "a": "Friendster",
    "b": "Six degrees",
    "c": "LinkedIn",
    "d": "Myspace",
    }
    ],
    "answer": "Six degrees",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Ransomware is a subset of?",
    "options": [
    {
    "a": "Malware",
    "b": "Phishing",
    "c": "Distributed DoS attacks",
    "d": "DoS attacks", 
    }
    ],
    "answer": "Malware",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Which institution led the group that has developed the India’s first 5-G Test Bed?",
    "options": [
    {
    "a": "IIT Delhi",
    "b": "IISc Bengaluru",
    "c": "IIT Madras",
    "d": "Centre of Excellence in Wireless Technology (CEWiT)",
    }
    ],
    "answer": "IIT Madras",
    "score": 0,
    "status": ""
    },
    ]
    }
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });
    