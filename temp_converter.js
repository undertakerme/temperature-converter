document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert() {
    
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;
  
  if (celsius != '') {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    } else {
        celsius = (parseFloat(fahrenheit) -32) * 0.555;
    }
  


    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
}


function clearForm() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
}