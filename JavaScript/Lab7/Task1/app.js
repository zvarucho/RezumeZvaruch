    const fInput = document.querySelector('.farenheit-input');
    const cInput = document.querySelector('.celcium-input');
    
    function convertToCelcium(f) {
      return 5 / 9 * (f - 32)
    }
    
    function convertToFarenheit(c) {
      return 9 / 5 + (c + 32)
    }
    
    fInput.addEventListener('change', (e) => {
      const value = +e.target.value;
      cInput.value = Math.floor(convertToCelcium(value));
    })
    
    cInput.addEventListener('change', (e) => {
      const value = +e.target.value;
      fInput.value = Math.floor(convertToFarenheit(value));
    });
