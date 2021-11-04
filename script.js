let cardArray=[
    {
        "name":"img1",
        "src":"img1.png"
    },
    {
        "name":"img2",
        "src":"img2.png"
    },
    {
        "name":"img3",
        "src":"img3.png"
    },
    {
        "name":"img4",
        "src":"img4.png"
    },
    {
        "name":"img5",
        "src":"img5.png"
    },
    {
        "name":"img6",
        "src":"img6.png"
    },
    {
        "name":"img7",
        "src":"img7.png"
    },
    {
        "name":"img8",
        "src":"img8.png"
    },
    {
        "name":"img1",
        "src":"img1.png"
    },
    {
        "name":"img2",
        "src":"img2.png"
    },
    {
        "name":"img3",
        "src":"img3.png"
    },
    {
        "name":"img4",
        "src":"img4.png"
    },
    {
        "name":"img5",
        "src":"img5.png"
    },
    {
        "name":"img6",
        "src":"img6.png"
    },
    {
        "name":"img7",
        "src":"img7.png"
    },
    {
        "name":"img8",
        "src":"img8.png"
    }
]

const shuffleArray = array =>
{
    for (let i = array.length - 1; i > 0; i--) 
    {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}

function Restart()
{
document.getElementById('modal').style.display="none";
document.getElementById('gridContainer').innerHTML="";
document.getElementById('moves').innerHTML="Moves 0";

shuffleArray(cardArray);

let Seconds=0;
let Minutes=0;
function timer()
{ 
    if(Seconds<10&&Minutes<10)
    {
        document.getElementById('counter').innerHTML="Time 0"+Minutes+":0"+Seconds;
    }
    else if(Minutes<10&&Seconds>=10)
    {
        document.getElementById('counter').innerHTML="Time 0"+Minutes+":"+Seconds;
    }
    else if(Seconds<10&&Minutes>10)
    {
        document.getElementById('counter').innerHTML="Time "+Minutes+":0"+Seconds;
    }
    else
    {
    document.getElementById('counter').innerHTML="Time "+Minutes+":"+Seconds;
    }
    Seconds++;
    if(Seconds==60)
    {
        Minutes++;
        Seconds=0;
    }
}
let a=setInterval(timer,1000);

let gridContainer=document.getElementById('gridContainer');
for(let i=0;i<16;i++)
{
    let item=document.createElement('div');
    item.setAttribute('class','gridItem');
    item.setAttribute('id',i);
    item.style.backgroundImage = "url('Images/front.png')";
    gridContainer.appendChild(item);
}

let score=0;
let move=0;
let process=true;

let flipCount=[];
let gridItem=document.getElementsByClassName('gridItem');
for(i=0;i<gridItem.length;i++)
{
    gridItem[i].addEventListener('click',flip);
}

function flip()
{
    if(process==true)
    {
    let index=cardArray[this.id].src;
    this.style.backgroundImage=`url("Images/${index}")`;
    flipCount.push(this.id);
    if(flipCount.length===2)
    {
        process=false;
        move++;
        document.getElementById('moves').innerHTML="Moves "+move;
        setTimeout(checkflip,500);
    }
    }
}

function checkflip(){
    let id1=flipCount[0];
    let id2=flipCount[1];
    if(cardArray[id1].src===cardArray[id2].src)
    {

        document.getElementById(id1).removeEventListener('click',flip);
        document.getElementById(id2).removeEventListener('click',flip);
        score++;
        document.getElementById(id1).style.opacity="0.4";
        document.getElementById(id2).style.opacity="0.4";
        if(score==8)
        {
            clearInterval(a);
            document.getElementById('modalContent').innerHTML=`<p>You found all matches in ${move} Moves <br></p><button onclick="Restart()">Play Again</button>`;
            document.getElementById('modal').style.display="block";
            var x = document.getElementsByTagName("BODY")[0];
        }
    }
    else
    {
        document.getElementById(id1).style.backgroundImage="url('Images/front.png')";
        document.getElementById(id2).style.backgroundImage="url('Images/front.png')";
    }
    flipCount=[];
    process=true;
}
}
Restart();
