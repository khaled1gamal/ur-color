let inputColor = document.getElementById("input-color");
let input1 = document.getElementById("input1").value;
let input2 = document.getElementById("input2").value;
let input3 = document.getElementById("input3").value;

const toChoose = () => {
  let wrong = document.getElementById("wrong");
  let inputColor = document.getElementById("input-color");
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let input3 = document.getElementById("input3").value;
  if (input1 > 255 || input2 > 255 || input3 > 255) {
    wrong.classList.add("show");
    window.scroll(0, 350);
  } else {
    wrong.classList.remove('show')
    urColor.style.backgroundColor = `rgb(${input1}, ${input2}, ${input3})`;
  }
};

inputColor.addEventListener("mousemove", () => {
  toChoose();
});

inputColor.addEventListener("change", () => {
  toChoose();
});

inputColor.addEventListener("input", () => {
  toChoose();
});

// inputColor.addEventListener("mousemove", () => {
//   toChoose();
// });

// inputColor.addEventListener("change", () => {
//   toChoose();
// });

// inputColor.addEventListener("input", () => {
//   toChoose();
// });
