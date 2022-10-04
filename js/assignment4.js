function getApi()
{
  fetch('//numbersapi.com/random')
    .then(res=>
    {
      return res.text();
    }).then(data=>
    {
      document.getElementById('apInfo').innerHTML=data;
    })
}
