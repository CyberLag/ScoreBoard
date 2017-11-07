import { Meteor } from 'meteor/meteor';
import {Players} from "../imports/api/players";

Meteor.startup(() => {
  // code to run on server at startup

  // lagra info i players collection
 
  //skriver ut lagrat data från collection till Konsolen 
  
});

// let user = {
//   name: "rakib", 
//   Age: 25
// }
// //object spread operator
// let person = {
//   ...user,
//   adress: "upplands väsby"
// }
// console.log(person)

// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5
// }
// let yearBuilt = {
//   yearBuilt: 1995
// }
// console.log({
//   ...house,
//   bedrooms:3,
//   yearBuilt,
//   flooring:"carpet"
// })