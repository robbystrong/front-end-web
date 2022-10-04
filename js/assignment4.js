function duckImg()
{
  url="https://dog.ceo/api/breeds/image/random";

  fetch(url)
    .then(function(response)
    {
      return response.json;
    })
    .then(function(data)
    {
      console.log(data);
    })
    .catch(function(error)
    {
      console.log("Error: " + error);
    });
}

function displayImg(image)
{
  document.getElementById('apimg').src=image;
}
