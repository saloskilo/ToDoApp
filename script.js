const inputBox = document.querySelector("#input-text");
const listContainer = document.querySelector("#list-container");
const addBtn = document.querySelector("#add");

addBtn.addEventListener("click", () => {
  if (inputBox.value == "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    //   cross sign
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});
listContainer.addEventListener(
  "click",
  (e) => {
     if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTasks(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTasks();