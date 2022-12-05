let homeTotal = 0;
let guestTotal = 0;

// --------------  HOME  ------------------

function incOneHome() {
    homeTotal+=1
    document.getElementById('homeSc').innerHTML = homeTotal;
    console.log(document.getElementById('homeSc').innerHTML);
}

function incTwoHome() {
  homeTotal += 2;
  document.getElementById('homeSc').innerHTML = homeTotal;
  console.log(document.getElementById('homeSc').innerHTML);
}

function incThreeHome() {
  homeTotal += 3;
  document.getElementById("homeSc").innerHTML = homeTotal;
  console.log(document.getElementById("homeSc").innerHTML);
}

// ---------------  GUEST  --------------------

function incOneGuest() {
  guestTotal += 1;
  document.getElementById("guestSc").innerHTML = guestTotal;
  console.log(document.getElementById("guestSc").innerHTML);
}

function incTwoGuest() {
  guestTotal += 2;
  document.getElementById("guestSc").innerHTML = guestTotal;
  console.log(document.getElementById("guestSc").innerHTML);
}

function incThreeGuest() {
  guestTotal += 3;
  document.getElementById("guestSc").innerHTML = guestTotal;
  console.log(document.getElementById("guestSc").innerHTML);
}

// ------------------  RESET  ---------------------

function reset() {
  homeTotal = 0;
  guestTotal = 0;
  document.getElementById("homeSc").innerHTML = homeTotal;
  document.getElementById("guestSc").innerHTML = guestTotal;
}

function nameChange() {
  let team1 = document.getElementById('teamA').value;
  let team2 = document.getElementById("teamB").value;

  document.getElementById("scoreScene").style.display = "block";
  document.getElementById("takingInput").style.display = "none";

  document.getElementById('first').innerHTML = team1;
  document.getElementById("second").innerHTML = team2;
}
