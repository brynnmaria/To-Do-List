const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value == ''){
    alert("You must write something!")
  } else {
    
    /* Create new <li> element */
    /* newItem = <li></li> */
    let newItem = document.createElement("li"); 

    /* Change the text inside our new <li> element to input value */
    /* newItem = <li>Brynn</li> */
    newItem.innerHTML = inputBox.value; 

    /* Add newItem as child of listContainer */
    /* 
      <ul id="list-container">
        <li>Brynn</li>
      </ul>
    */
    listContainer.appendChild(newItem);

    /* Create new <span> element */
    /* randomThingy = <span></span> */
    let randomThingy = document.createElement("span");

    /* Change the text inside our new element to "code" for X symbol */
    /* randomThingy = <span>X</span> */
    randomThingy.innerHTML = "\u00d7";

    /* Add randomThingy as child of newItem */
    /* 
      <ul id="list-container">
        <li>Brynn <span>X</span></li>
      </ul>
    */
    newItem.appendChild(randomThingy);
  }

  inputBox.value = "";

  saveData();
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");

  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();