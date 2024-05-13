document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".input-group input");
    
    inputs.forEach(input => {
      input.addEventListener("focus", function() {
        this.style.border = "1px solid blue"; 
      });
      
      input.addEventListener("blur", function() {
        this.style.border = "1px solid #ccc"; 
      });
    });
  });
  