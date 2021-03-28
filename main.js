const shapeWidth = document.querySelector("#width");
const shapeHeight = document.querySelector("#height");
const button = document.querySelector("#calculate");

const calcAll = () => {
    const widthVal = parseInt(shapeWidth.value);
    const heightVal = parseInt(shapeHeight.value);
    if(widthVal !== 0 && heightVal !== 0) {
       calcArea(widthVal, heightVal);
       calcPerimeter(widthVal, heightVal);
       changeDimensions(widthVal, heightVal);
       drawShape2(widthVal, heightVal);
      } else {
         alert("Wartość nie może być równa 0");
   }
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

const drawShape2 = (width, height) => {
   const shape = document.querySelector("#shape");
   let aspectRatio = 0;
   if(width > height) {
      shape.style.width = "200px";
      aspectRatio = width / height;
      const shapeHeight = 200 / aspectRatio; 
      shape.style.height = shapeHeight + "px";
   } else if (width < height) {
      shape.style.height = "200px";
      aspectRatio = height / width;
      const shapeWidth = 200 / aspectRatio; 
      shape.style.width = shapeWidth + "px";
   } else if (width == height) {
      shape.style.width = "200px";
      shape.style.height = "200px";
      aspectRatio = 1;
   }
}



// ##########################
// ## PARKING DLA KURSORÓW ##
// ##########################