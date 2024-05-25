const reviews = [
  {
    id: 1,
    name: "keit",
    job: "web developer",
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
    text: "In granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observe",
  },
  {
    id: 2,
    name: "anna Jonson",
    job: "web Designer",
    img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observe",
  },
  {
    id: 3,
    name: "Peter Jnes",
    job: "intern",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: " First place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observe",
  },
  {
    id: 4,
    name: "Selena Gomez",
    job: "Backend Dev",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: " we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observe",
  },
  {
    id: 5,
    name: "Sam Altman",
    job: "Engineer",
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTxZ77s6YtAMVFG9HlZCoqTrcM-oRd5v4d007NLTgatn6_DSXzBn80teKVj67nCHP2uwla-B7ZDYEMbCzE",
    text: "He found the open ai first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observe",
  },
];
const personImg=document.querySelector(".person-img");
const personName=document.querySelector(".name");
const personJob=document.querySelector(".work");
const personDesc=document.querySelector(".text");
const leftBtn=document.querySelector(".left");
const rightBtn=document.querySelector(".right");
const random=document.querySelector('button');
let currentItem=0;
window.addEventListener("DOMContentLoaded",function(){
  showPerson();
});

function showPerson(){
  let item=reviews[currentItem];
  personImg.src=item.img;
  personName.textContent=item.name;
  personJob.textContent=item.job;
  personDesc.textContent=item.text;
}
rightBtn.addEventListener("click",function(){
  currentItem++
  if(currentItem>reviews.length-1){
    currentItem=0;
  }
  showPerson();
  console.log(currentItem)
})
leftBtn.addEventListener("click",function(){
  currentItem--;
  if(currentItem<0){
    currentItem=reviews.length-1;
  }
  showPerson();
  console.log(currentItem);
})
random.addEventListener("click",function(){
   const randomValue=Math.floor(Math.random()*reviews.length);
   currentItem=randomValue;
   showPerson();
   console.log(currentItem)
})

