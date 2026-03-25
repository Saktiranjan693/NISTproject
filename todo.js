

let inpvalue=document.getElementById("value")
let addbtn=document.getElementById("btn")
// let todo1st=document.getElementById("todo1st")
let list=document.querySelector(".todolist")


// console.log(inpvalue)
// console.log(btn)

 const addTodo = ()=>{
    //  console.log(inpvalue.value) 
    //  todo1st.innerHTML=inpvalue.value;
    let pelem=document.createElement("p");
    pelem.textContent=inpvalue.value;
    // console.log(pelem);
    list.append(pelem);
    inpvalue.value="";
 }

list.addEventListener("click",(event)=>{
     let tarele=event.target;
     tarele.remove();
    

})


addbtn.addEventListener("click" ,()=>{
addTodo();

})

