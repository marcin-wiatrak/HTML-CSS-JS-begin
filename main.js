const shapeWidth = document.querySelector("#width");
const shapeHeight = document.querySelector("#height");
const button = document.querySelector("#calculate");

const calcAll = () => {
    const widthVal = shapeWidth.value;
    const heightVal = shapeHeight.value;
    calcArea(widthVal, heightVal);
    calcPerimeter(widthVal, heightVal);
    changeDimensions(widthVal, heightVal);
}

button.addEventListener("click", calcAll);

 const calcArea = (width, height) => {
    const area = width * height;
    document.querySelector("#area").innerText = area;
 }
 const calcPerimeter = (width, height) => {
    const perimeter = (2 * width) + (2 * height);
    document.querySelector("#perimeter").innerText = perimeter;
 }

const changeDimensions = (width, height) => {
   const dimensionsSpan = document.querySelectorAll(".dimension");
   dimensionsSpan[0].innerText = width + "px";
   dimensionsSpan[1].innerText = height + "px";
   dimensionsSpan[2].innerText = height + "px";
   dimensionsSpan[3].innerText = width + "px";
}
 

// ##########################
// ## PARKING DLA KURSORÓW ##
// ##########################
