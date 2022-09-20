// button.addEventListener('submit',text);

function text()
{
  event.preventDefault();
  let genre;
  if(document.getElementById("metal").checked)
  {
    genre="metal";
  }
  else if(document.getElementById("jazz").checked)
  {
    genre="jazz";
  }
  else if(document.getElementById("classical").checked)
  {
    genre="classical";
  }
  document.getElementById("gbtxt").innerHTML="Hi "+document.getElementById("nameInput").value+"! You have good taste since you like "+
  genre+".";
}
