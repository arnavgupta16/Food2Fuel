function checkInput() {
    var input = document.getElementById("inputField").value.toLowerCase();
    var output = document.getElementById("output");
  
    if (input === "beans") {
      output.textContent = "Use leftover canned beans,corn chopped veggies in a vinegratte";
    }
    else if (input === "tomatoes") {
        output.textContent = "Hollow out tomatoes and stuff with a mixture of leftover rice and veggies then bake";
      }
     else if (input === "soup") {
        output.textContent = "Use leftover chicken and add canned tomat and beans season with cumin seeds and chilli powder serve over  chips";
      }
     else if (input === "banana") {
        output.textContent = "Use over-ripe bananas to make sweet pudding or bread";
      }
     else if (input === "rice") {
        output.textContent = "Use leftover rice and veggies to make delicious fried rice.";
      }
    else {
      output.textContent = "Invalid input";
    }
  }
  