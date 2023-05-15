import { Component } from '@angular/core';



export class User {
  name: string;
  firstName: string;
  age: number;
  isAgeHidden: boolean;
  quote: string;
  photo: string;

constructor(
name: string,
firstName: string,
age: number,
isAgeHidden: boolean,
quote: string,
photo: string 
){
this.name = name;
this.firstName = firstName;
this.age = age;
this.isAgeHidden = isAgeHidden;
this.quote = quote;
this.photo = photo;}
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
  user: User; 

constructor() { 
  this.user = new User(
  'dowie',
  'john',
  25,
  false,
  '',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKf5N78lFn50X--npJiERGl_fUzSNb4QvWQ&usqp=CAU',
  )
}



/*export class UserProfileComponent {

  user = {
    name : 'Dowie',
    firstName : 'John',
    age : 25,
    isAgeHidden : false,
    quote : '',
    photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKf5N78lFn50X--npJiERGl_fUzSNb4QvWQ&usqp=CAU'
  };*/

ageVisibility(): void {
  this.user.isAgeHidden = !this.user.isAgeHidden;
}
}