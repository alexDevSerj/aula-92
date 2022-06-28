  player1 = localStorage.getItem("player1");
	player2 = localStorage.getItem("player2");

	player1Score = 0;
	player2Score = 0;
	var x;

document.getElementById("player1").innerHTML = player1 + " : ";
document.getElementById("player2").innerHTML = player2 + " : ";

document.getElementById("player1score").innerHTML = player1Score ;
document.getElementById("player2score").innerHTML = player2Score ;

document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1 ;
document.getElementById("player_resposta").innerHTML = "Turno de Resposta - " + player2 ;

function send() {
	getWord = document.getElementById("word").value;
	word = getWord.toLowerCase();
	console.log("palavra em caixa baixa = " + word);

    charAt1 = word.charAt(1);
	console.log(charAt1);

	lenghtDivide2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenghtDivide2);
	console.log(charAt2);

    lenghtMinus1 = word.length - 1; 
    charAt3 = word.charAt(lenghtMinus1); 
	console.log(charAt3);

    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
	console.log(removeCharAt3);

    question_word = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  question_word + inputBox + checkButton ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}


questionTurn = "player1";
answerTurn = "player2";


function check()
{
	getAnswer = document.getElementById("inputCheckBox").value;
	answer = getAnswer.toLowerCase();
	console.log("resposta em caixa baixa - " + answer);
	
	if(answer == word){
		if(answerTurn == "player1")
		{
			player1Score = player1Score +1;
		    document.getElementById("player1score").innerHTML = player1Score;
			x = alert("você acertou");
			//document.getElementById("aviso").innerHTML = x; 	
		}
		else 
		{
			player2Score = player2Score +1;
		    document.getElementById("player2score").innerHTML = player2Score;
				x = alert("você acertou");
		}
		
	}

	if(answer != word){
		if(answerTurn == "player1")
		{
			x = alert("você errou");
			//document.getElementById("aviso").innerHTML = x; 	
		}
		else 
		{
				x = alert("você errou");
		}
		
	}

	if(questionTurn == "player1")
	{
		questionTurn = "player2"
		document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player2 ;
	}
	else 
	{
		questionTurn = "player1"
		document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1 ;
	}

	if(answerTurn == "player1")
	{
		answerTurn = "player2"
		document.getElementById("player_resposta").innerHTML = "Turno de Resposta - " + player2 ;
	}
	else 
	{
		answerTurn = "player1"
		document.getElementById("player_resposta").innerHTML = "Turno de Resposta - " + player1 ;
	}

    document.getElementById("output").innerHTML = "";
}
