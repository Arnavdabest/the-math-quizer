function send(){
    console.log("send")
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    console.log(number1);
    actual_answer = parseInt(number1) * parseInt(number2); 
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id= 'input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer = actual_answer){
        if(answer_turn == "player1"){
            update_player1_score = player1score + 1;
            document.getElementById("player1score").innerHTML = update_player1_score;
        }
        else
        update_player2_score = player2score + 1;
        document.getElementById("player2score").innerHTML = update_player2_score;
    }
}
player1name = "player1name";
player2name = "player2name";

if(question_turn = "player1"){
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "question_turn -" + player2name;
}
else{
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "question_turn -" + player1name;
}

if(answer_turn = "player1"){
    answer_turn = "player2"
    document.getElementById("player_answer").innerHTML = "answer_turn -" + player2name;
}
else{
    question_turn = "player1"
    document.getElementById("player_answer").innerHTML = "answer_turn -" + player1name;
}