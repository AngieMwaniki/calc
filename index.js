const calcButton =document.querySelector(".calcbutton")
const answer= document.querySelector("#answer")


calcButton.addEventListener('click', ()=>{
    const value1=document.getElementById("one").value
    const value2=document.getElementById("two").value
    const calculator=document.getElementById("calculator").value
  
   if(calculator==="sub"){
    answer.innerHTML = (Number(value1) - Number(value2))
   }
   else if(calculator==="add"){
    answer.innerHTML = (Number(value1) + Number(value2))
   }
   else if(calculator==="div"){
    answer.innerHTML = (Number(value1) / Number(value2))
   }
  else if(calculator==="mul") {
    answer.innerHTML = (Number(value1) * Number(value2))
  }

})