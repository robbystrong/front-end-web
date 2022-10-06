const one=['../music/1/sor-60-1.pdf','../music/1/sor-44-15.pdf'];

function getMusic()
{
  let slct=document.getElementById('difficultySlct');
  let musc=document.getElementById('musicPDF');
  let doc;

  if(slct.value==='1')
  {
    doc=one[Math.floor(Math.random()*one.length)];
  }

  musc.src=doc;
}
