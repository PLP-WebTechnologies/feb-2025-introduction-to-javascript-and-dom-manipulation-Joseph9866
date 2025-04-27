// Change text content dynamically
function changeText() {
    const textElement = document.getElementById("textContent");
    textElement.textContent = "The text content has been changed!";
  }
  
  // Change CSS style dynamically
  function changeStyle() {
    const styleTextElement = document.getElementById("styleText");
    styleTextElement.style.color = "blue";
    styleTextElement.style.fontSize = "20px";
  }
  
  // Add or remove an element dynamically
  function addRemoveElement() {
    const dynamicContent = document.getElementById("dynamicContent");
    const newElement = document.createElement("p");
    
    // If the paragraph already exists, remove it
    if (dynamicContent.children.length > 1) {
      dynamicContent.removeChild(dynamicContent.lastChild);
    } else {
      newElement.textContent = "This is a dynamically added element!";
      dynamicContent.appendChild(newElement);
    }
  }
  