function adduser(){
  player1 = document.getElementById("player1").value;
  localStorage.setItem("player1", player1)

  player2 = document.getElementById("player2").value;
  localStorage.setItem("player2", player2)

  window.location="game_page.html"
}