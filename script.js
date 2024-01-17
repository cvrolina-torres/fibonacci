function calcularFibonacci() {
  const test = document.getElementById('soyunid');
  const fibonacci = [0,1];
  const inputUser = parseInt(prompt("Ingrese un número para realizar su secuencia Fibonacci"));
   
 if (inputUser === parseInt(inputUser)) {
    for (let i = 1; i < inputUser-1; i++) {
        let temp = fibonacci[i] + fibonacci[i-1]
        fibonacci.push(temp)
    }
    test.innerHTML = fibonacci
}

else {
    alert('Invalid Input')
    calcularFibonacci ()
}
    }
calcularFibonacci ()

