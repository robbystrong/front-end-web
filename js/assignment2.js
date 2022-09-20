let txt=document.getElementById("gbtxt");
let button=document.getElementById("subButton");
let name=document.getElementById("nameInput").value;
var selectedGenre=document.getElementsByName("radioz");
let genre;

button.addEventListener('click',text);

function text()
{
  button.onSubmit=event.preventDefault();
  for(let i of selectedGenre)
  {
    if(selectedGenre.checked)
    {
      genre=i.id;
    }
  }
  txt.innerHTML="Hi "+name+"! You have good taste since you like "+genre+".";
}
