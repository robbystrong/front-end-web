const one=['../music/1/sor-60-1.pdf','../music/1/sor-44-15.pdf'];
const two=[];
const three=[];
const four=[];
const five=[];

let oneN=0,
    twoN=0,
    threeN=0,
    fourN=0,
    fiveN=0;

document.getElementById("get").addEventListener("click", getMusic);

function getMusic()
{
  // let slct=document.querySelector('input[name="difficultySlct"]:checked');
  let slct=document.getElementById('difficultySlct');
  let musc=document.getElementById('musicPDF');
  let tab=document.getElementById('newTab');
  let doc;

  if(slct.value==='1')
  {
    if(oneN===0)
    {
      Shuffle(one);
    }
    else if(oneN===one.length)
    {
      oneN=0;
    }
    doc=one[oneN];
    oneN++;
  }
  else if(slct.value==='2')
  {
    if(twoN===0)
    {
      Shuffle(two);
    }
    else if(twoN===two.length)
    {
      twoN=0;
    }
    doc=two[twoN];
    twoN++;
  }
  else if(slct.value==='3')
  {
    if(threeN===0)
    {
      Shuffle(three);
    }
    else if(threeN===three.length)
    {
      threeN=0;
    }
    doc=three[threeN];
    threeN++;
  }
  else if(slct.value==='4')
  {
    if(fourN===0)
    {
      Shuffle(four);
    }
    else if(fourN===four.length)
    {
      fourN=0;
    }
    doc=four[fourN];
    fourN++;
  }
  else if(slct.value==='5')
  {
    if(fiveN===0)
    {
      Shuffle(five);
    }
    else if(fiveN===five.length)
    {
      fiveN=0;
    }
    doc=five[fiveN];
    fiveN++;
  }

  musc.src=doc;
  tab.href=doc;
}

function Shuffle(arr)
{
  let iCurrent=arr.length, iRando;

  while(iCurrent!=0)
  {
    iRando=Math.floor(Math.random()*iCurrent);
    iCurrent--;

    [arr[iCurrent], arr[iRando]]=[arr[iRando], arr[iCurrent]];
  }
}
