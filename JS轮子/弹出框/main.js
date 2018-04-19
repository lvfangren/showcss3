var bt=document.getElementById('button');
var items=document.getElementById('items');
var close=document.getElementById('close');

bt.addEventListener('click',openItem);

close.addEventListener('click',closeItem);

items.addEventListener('click',outCloseItem);

function openItem(){
  items.style.display="block";
}

function closeItem(){
  items.style.display="none";
}

function outCloseItem(e){
    if(e.target==items)
    {
      items.style.display="none";
    }
}
