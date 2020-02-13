// Your code goes here!
import { modulo, percentageOf, percentage, difference } from "./percentage.js";
import { calculateAspectRatio } from "./aspect-ratio.js";

let form1 = document.querySelector("#modulo-form");
let module1 = document.querySelector("#modulo_1");
let module2 = document.querySelector("#modulo_2");
let result = document.querySelector("#modulo_result");
document.addEventListener("keyup", () => {
  result.value = modulo(module1.value, module2.value);
});
let form2 = document.querySelector("#percentage-form");
let percentage_1 = document.querySelector("#percentage_1");
let percentage_2 = document.querySelector("#percentage_2");
let percentage_result = document.querySelector("#percentage_result");
document.addEventListener("keyup", () => {
  percentage_result.value = percentageOf(
    percentage_1.value,
    percentage_2.value
  );
});

let form3 = document.querySelector("#percentageOf-form");
let percentageOf_1 = document.querySelector("#percentageOf_1");
let percentageOf_2 = document.querySelector("#percentageOf_2");
let percentageOf_result = document.querySelector("#percentageOf_result");
document.addEventListener("keyup", () => {
  percentageOf_result.value = percentage(
    percentageOf_1.value,

    percentageOf_2.value
  );
});

let form4 = document.querySelector("#difference-form");
let difference_1 = document.querySelector("#difference_1");
let difference_2 = document.querySelector("#difference_2");
let difference_result = document.querySelector("#difference_result");
document.addEventListener("keyup", () => {
  difference_result.value = difference(
    difference_1.value,

    difference_2.value
  );
});

let form5 = document.querySelector("#aspect-form");
let ratio_1 = document.querySelector("#ratio_1");
let ratio_2 = document.querySelector("#ratio_2");
let ratio_result_width = document.querySelector("#ratio_result-width");
let ratio_result_height = document.querySelector("#ratio_result-height");
document.addEventListener("keyup", () => {
  console.log(
    calculateAspectRatio(
      ratio_1.value,

      ratio_2.value,
      ratio_result_width.value,
      ratio_result_height.value
    )
  );

  if (ratio_result_width.value === "") {
    ratio_result_width.value = calculateAspectRatio(
      ratio_1.value,
      ratio_2.value,
      ratio_result_width.value,
      ratio_result_height.value
    );
  } else if (
    ratio_result_width.value !== "" &&
    ratio_result_height.value === ""
  ) {
    ratio_result_height.value = calculateAspectRatio(
      ratio_1.value,
      ratio_2.value,
      ratio_result_width.value,
      ratio_result_height.value
    );
  }
});
