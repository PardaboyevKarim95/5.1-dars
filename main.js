let elForm = document.querySelector("form");
let elInput = document.querySelector("input");
let elUl = document.querySelector("ul");

let arr = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  arr.push({
    id: arr.length + 1,
    text: elInput.value,
    iscompleted: false,
  });
  elInput.value = "";
  elUl.innerHTML = " ";

  for (const item of arr) {
    let elLi = document.createElement("li");
    let elStrong = document.createElement("strong");
    let elSpan = document.createElement("span");
    let elinpcheked = document.createElement("input");
    console.log(elinpcheked);
    elinpcheked.setAttribute("type", "checkbox");
    // TEXT KONTENLARI
    elinpcheked.textContent = item.iscompleted;
    elStrong.textContent = `ID: ${item.id} `;
    elSpan.textContent = item.text;

    elLi.appendChild(elinpcheked);
    elLi.appendChild(elStrong);
    elLi.appendChild(elSpan);
    elUl.appendChild(elLi);
  }
});
