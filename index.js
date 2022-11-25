// Write your solution in this file!
var customerName = 'bob'
var bestCustomer;
const leastFavoriteCustomer = 'Richie'
 function upperCaseCustomerName(){
 
    customerName = customerName.toUpperCase();
 }

 function setBestCustomer(){
    return bestCustomer = 'not bob'
 }
  
 function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob'
 }

 function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Owen'

 }

 console.log(changeLeastFavoriteCustomer());