

document.body.innerHTML = calculator( 20, 5);

 function calculator(a: number, b: number) {
     var mul = a * b;
     var sum = a + b;
     var div = a / b;
     var sub = a - b;
     return "sum =" + sum + "\n mul =" + mul + "\n div =" + div + "\n sub =" + sub;
 }
