const left=document.querySelector(".left");
const right=document.querySelector(".right");
const allblock=document.querySelector(".allblock");

left.addEventListener("mouseenter",()=>{
    allblock.classList.add("hover-left");
});

left.addEventListener("mouseleave",()=>{
    allblock.classList.remove("hover-left");
});

right.addEventListener("mouseenter",()=>{
    allblock.classList.add("hover-right");
});

right.addEventListener("mouseleave",()=>{
    allblock.classList.remove("hover-right");
});
