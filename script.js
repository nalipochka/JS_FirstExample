// #1

// while(true){
//     number = prompt("Enter your number:");
//  if(number/1 != number){
//     alert("Please enter a correct number!");
//  }
//  else{
//     a = Math.pow(number, 2);
//     alert(a);
//     break;
//  }
// }

// #2

// while(true){

// n1 = prompt("Enter first number:");
// n2 = prompt("Enter second number");

// if(n1/1 != n1 || n2/1 != n2){
//     alert("Please enter a correct number!");
// }
// else{
//     alert(`${n1} ${n2}`);
//     a = (Number(n1) + Number(n2))/2;
//     alert(`AVG: ${a}`);
//     break;
// }
// }

// #4

//  const mile = 0.621371

//  while(true){
//     n1 = prompt("Enter km: ");
//     if(n1/1 !=n1){
//         alert("Please enter a correct number!");
//     }
//     else{
//         alert(`${n1*mile} miles`);
//         break;
//     }
//  }

// #5

// while(true){

//     n1 = prompt("Enter first number:");
//     n2 = prompt("Enter second number");
    
//     if(n1/1 != n1 || n2/1 != n2){
//         alert("Please enter a correct number!");
//     }
//     else{
//         alert(`${n1} + ${n2} = ${Number(n1)+Number(n2)}`);
//         alert(`${n1} - ${n2} = ${Number(n1)-Number(n2)}`);
//         if(Number(n2) !== 0)
//         alert(`${n1} / ${n2} = ${Number(n1)/Number(n2)}`);
//         else
//         alert("You can't divide by zero!");
//         alert(`${n1} * ${n2} = ${Number(n1)*Number(n2)}`);
//         break;
//     }
//     }

//#7

// hours = prompt("Enter hours:");
// minutes = prompt("Enter minutes:");

// res_hours = 23-hours;
// res_minutes = 60-minutes;

// alert(`left: ${res_hours} h. ${res_minutes} m.`);

// #9

// n = prompt("Enter 5-digit number:");

// if(String(n).length != 5)
// alert("Please enter a correct number!");
// else{
//     temp = n % 10;
//     n = Math.floor(n/10);
//     alert(`${temp}${n}`);
// }