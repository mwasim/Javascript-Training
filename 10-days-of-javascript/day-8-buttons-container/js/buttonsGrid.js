const btn5 = document.getElementById("btn5");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

const rotateButtonsText = () => {
  //ORDER OF ROTATION
  /*
        1 => 2 => 3 => 6 => 9 => 8 => 7 => 4 => 1 (Back to 1)
        1 <= 4
        4 <= 7
        7 <= 8
        8 <= 9
        9 <= 6
        6 <= 3
        3 <= 2
        2 <= 1

    */
  let btnText = btn1.innerHTML;
  let btn1Text = btnText;
  btn1.innerHTML = btn4.innerHTML;

  btnText = btn4.innerHTML;
  btn4.innerHTML = btn7.innerHTML;

  btnText = btn7.innerHTML;
  btn7.innerHTML = btn8.innerHTML;

  btnText = btn8.innerHTML;
  btn8.innerHTML = btn9.innerHTML;

  btnText = btn9.innerHTML;
  btn9.innerHTML = btn6.innerHTML;

  btnText = btn6.innerHTML;
  btn6.innerHTML = btn3.innerHTML;

  btnText = btn3.innerHTML;
  btn3.innerHTML = btn2.innerHTML;

  btnText = btn2.innerHTML;
  btn2.innerHTML = btn1Text;
};

btn5.addEventListener("click", rotateButtonsText);
