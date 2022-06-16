let myarray = []

function addTo() {
  myarray.push(...document.getElementById("names").value.split(","));
  let number_of_names = myarray.length;
  pick_who_pays = Math.floor(Math.random() * number_of_names);
  let whoIsPaying = document.getElementById("who_is_paying").innerHTML = "Bad news " + myarray[pick_who_pays] + " looks like you're paying the bill! Better luck next time";
}

// Reset button and function 
resetButton = document.getElementById("reset_button");

function reloadPage() {
  window.location.reload();
}