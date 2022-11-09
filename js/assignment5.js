document.getElementById('granim-canvas').addEventListener("click", change);
let num=0;

var granimInstance = new Granim({
   element: '#granim-canvas',
   name: 'granim',
   opacity: [1, 1],
   direction: 'top-bottom',
   image: {
     source: '../pix/grumpyCat.jpg',
     blendingMode: 'multiply',
   },
   states : {
       "default-state": {
           gradients: [
               ['#b11df4', '#f0a71e'],
               ['#d721de', '#861de9'],
               ['#c0e40d', '#eb1487']
           ],
           transitionSpeed: 6000,
       },
   },
});

function change()
{
  if(num%2===0)
  {
    granimInstance.changeBlendingMode('exclusion');
  }
  else
  {
    granimInstance.changeBlendingMode('multiply');
  }
  num++;
}
