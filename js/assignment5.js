var granimInstance = new Granim({
   element: '#granim-canvas',
   name: 'granim',
   opacity: [1, 1],
   direction: 'top-bottom',
   image: {
     source: '../pix/abstractPepe.jpg',
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
       }
   }
});
