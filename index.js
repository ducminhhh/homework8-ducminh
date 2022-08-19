//  tìm số nguyên
//  cách 1 
   let n = prompt ("Enter a number to check prime number") 
   let Enter = true
   if(n < 2){
    Enter = false; 
   } else {
      for ( i = 2; i < n; i++) {
         if ( n % 2 === 0 )
      { Enter = false ; break }
      }
   }

   if ( Enter === true ) {
     alert( n + " is a prime number" )
   }
   else { alert( n + " is not a prime number" )  
   }







// cách 2 này anh thử cho người dùng chỉ nhập số thôi nếu nhập chữ sẽ báo sai
// let n = prompt ("Enter a number to check a prime number")
// let Enter = true
// if (isNaN(n)) {
//    alert (" you need to Enter a number to check a prime number, please try again!");
//     Enter = false
// }
// else {
//    if(n < 2) {
//         Enter = false; 
//       } else {
//          for ( i = 2; i < n; i++) {
//             if ( n % 2 === 0 )
//          { Enter = false ; break }
//           }
//       }
// }
// if ( Enter === true ) {
//        alert( n + " is a prime number" )
// }
// else { alert( n + " is not a prime number" ) 
      
// }









// cách 3 này anh thử dùng vòng lập muốn người dùng nhập số nếu nhập chữ sẽ báo sai và vòng 
// lập sẽ quay lại anh mới làm được vòng lập còn cái số nguyên anh kh làm được mong em fix giúp anh.


// let n = ""
// let Enter = true
// do{
//      n = prompt ("Enter a number to check prime number");
//    if (!isNaN(n)) {
//       Enter = true ;
//    } else {
//       alert(" you need to Enter a number to check a prime number, please try again!")
//    }

// } while(isNaN(n));
// if(n < 2) {
//             Enter = false; 
// } else {
//              for ( i = 2; i < n; i++) {
//                 if ( n % 2 === 0 )
//              { Enter = false ; break }
//             }
//                }
// if (Enter === true) {
//    alert(n + " is a prime number")
// } else  {n + " is not a prime number"}












// lập máy tính .
// anh làm được cơ bản như vậy nhưng mà khi mà anh nhập vào chữ cái thì nó trả về anh 
//2 lệnh else và alert cuối cùng luôn anh muốn khi mà mình nhập chữ cái vào thì nó chỉ
//trả về lệnh else thôi là hết thì làm sao em nhỉ?

 p = prompt(" Enter a  calculation (+, -, *, /, %) to check ")
 let a = Number(prompt("Enter a number to check"))
 let b = Number(prompt("Enter a number to check"))
 let result = ""
 if ( p == "+" ) {
     result = a + b
 }
 else if ( p == "-" ) {
     result = a - b
 }
 else if ( p == "*" ) {
     result = a * b
 }
 else if ( p == "/" ) {
     result = a / b
 }
 else if ( p == "%" ) {
     result = a % b
}
 else {" wrong calculation "}

 alert (" result : " + result )













// cách 2 anh chưa dùng được, anh nhập phép tính  và nhập 2 số thì kq nó trả về lệnh default luôn thì mình fix ntn em nhỉ?
// p = prompt(" Enter a  calculation (+, -, *, /, %) to check ")
// let a = Number(prompt("Enter a number to check"))
// let b = Number(prompt("Enter a number to check"))
// let result = ""
// switch ( p ) {
//     case p == "+": result = a + b ; alert ("result: " + result); break
//     case p == "-": result = a - b ; alert ("result: " + result); break
//     case p == "*": result = a * b ; alert ("result: " + result); break
//     case p == "/": result = a / b ; alert ("result: " + result); break
//     case p == "%": result = a % b ; alert ("result: " + result); break
//     default : alert (" wrong calculation ")

// }