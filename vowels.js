const myInput = document.querySelector(".myInput");
const btnCount = document.querySelector(".btnCount");
const msg = document.querySelector(".msg");

myInput.focus();  

btnCount.addEventListener("click", () => {
  let str = myInput.value;
  const pattern = /[aeıioöuüAEIİOÖUÜ]/g;
  let countStrVowels = str.match(pattern)?.length || 0;
  msg.innerHTML = `There are ${countStrVowels} vowels in <span style = "color:red;">${str}</span>`;
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    btnCount.click();
  }
});
