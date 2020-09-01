var a = "Xin chào thế giới ngày mai";
var b = 10;
var c = 20;
let name = "Thịnh";
var arrayD = [a, b, c];

const thangnv = "Nguyễn Văn Thắng";

var squareRectangle = (height, width) => {
  console.log(height * width);
};

function caclBMI(weight, height, isGymer = false, dientichhinhchunhat) {
  if (isGymer) {
    // console.log("Không áp dụng cho thằng này");
    // dientichhinhchunhat(15, 10);
  } else {
    var bmi = weight / (height * height);
    console.log(bmi);
  }

  console.log(thangnv);
  //   thangnv = "Trần Đức Bo";
  name = "Tô Mạnh Linh";
  console.log(name);
}

// squareRectangle(15, 10);

caclBMI(66, 1.76, true, squareRectangle);

// arrayD.forEach((item, index) => {
//   console.log(item, index);
// });

// arrayD.map((item) => {
//   console.log(item);
// });

// console.log(arrayD);
