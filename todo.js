const additem=()=>{
    //Step1. Read user input from textbox
    let userinput=document.querySelector("#inp").value
    //console.log(userinput);
    //step2. Create list item
    let listitem=document.createElement("h1")
    listitem.textContent=userinput
    //console.log(listitem);
    //Step3. Target the list
    let list=document.querySelector("#todo")
    //Step4. Add item to the list
    list.appendChild(listitem)
    /*insertBefore,append,appendchild*/
}
let btn=document.querySelector("#btn")
//document.getElementId("btn")
btn.addEventListener("click",additem)
