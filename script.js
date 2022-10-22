let myList=document.getElementsByTagName("LI");
let i;
for(i=0;i<myList.length;i++)
{
    let span=document.createElement("SPAN");
    let txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}


let close=document.getElementsByClassName("close");
let j;
for(j=0;j<close.length;j++)
{
    close[j].onclick=function(){
            let div=this.parentElement;
            div.style.display="none";
    }
}

let list=document.querySelector('ul');
list.addEventListener('click',function(ev){
    if(ev.target.tagName==='LI'){
        ev.target.classList.toggle('checked');
    }

},false)



function newElement(){
    let li=document.createElement("li");
    let inputValue=document.getElementById("myInput").value;
    let t=document.createTextNode(inputValue);
    li.appendChild(t);

    if(inputValue === ''){
        alert("you must write something!")
    }
    else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value="";

    let span=document.createElement("SPAN");
    let txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i=0;i<close.length;i++)
    {
        close[i].onclick=function(){
            let div=this.parentElement;
            div.style.display="none";
        }
    }
}