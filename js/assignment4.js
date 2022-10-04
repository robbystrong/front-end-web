function getApi()
{
  fetch('https://asli-fun-fact-api.herokuapp.com/')
    .then(res=>res.json())
    .then(object=>
      {
        document.getElementById('apInfo').innerHTML=object.data.fact;
      });
}
