 let fi = [0, 1];


 function Fib() {

     let numbers = prompt("Entrez la valeur souhaité e\nla suite de Fibonacci", "50");
     console.log(numbers);


     for (i = 2; i <= numbers * 1; i++) {



         fi[i] = fi[i - 1] + fi[i - 2];


     }
     for (t = 0; t <= numbers; t++) {

         document.Fibo.result.value += fi[t] + ",";
     }


     document.Fibo.result.value += "Fin";

     window.status = "calculs terminés";

 }



 function CleanUp() {
     document.Fibo.result.value = " ";


 }