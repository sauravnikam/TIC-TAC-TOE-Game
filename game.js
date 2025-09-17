let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turnO = true;

let winPatterns = [ [0,1,2],
  [3,4,5],
    [6,7,8],
    [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
     [2,4,6] ];

     boxes.forEach((btns)=>{
        btns.addEventListener("click",()=>{
          if(turnO === true){
            btns.innerHTML="O"
            turnO = false;
            
          }
          else{
             btns.innerHTML="X"
             turnO = true;
          }
          btns.disabled = true;
          checkwinner();
     });
    });
   
    let checkwinner = ()=>{
      for (let pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerHTML;  
       let val2 = boxes[pattern[1]].innerHTML;  
        let val3 = boxes[pattern[2]].innerHTML; 

        if(val1 != "" && val2 !="" && val3 != ""){
          if(val1 === val2 && val2 === val3){
            showwinner(val1);
            disablebtns();
            
          }
        }
      }
    }

     let showwinner = (winner)=>{
      msg.innerHTML=`winner ${winner}`
      msgContainer.classList.remove("hide")
    }

    
    let disablebtns =()=>{
  for (let  box of boxes) {
      box.disabled = true;
  }                
  }
 let enablebtns =()=>{
  for (let  box of boxes) {
      box.disabled = false;
      box.innerHTML="";
                    
  }
 }
     const resetgame =()=>{
      turnO = true;
      enablebtns();
      msgContainer.classList.add("hide");

    }
newbtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);




     