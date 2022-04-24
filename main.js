const answer = document.getElementById("answer");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
button1.onclick = function () {
  answer.textContent = "不正解! 宮城県の郷土料理です!!";
};
button2.onclick = function () {
  answer.textContent = "正解! お見事!!";
};
button3.onclick = function () {
  answer.textContent = "不正解! 秋田の郷土料理です!!";
};
