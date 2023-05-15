import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  user = {
    name : 'Dowie',
    firstName : 'John',
    age : 25,
    isAgeHidden : false,
    quote : '',
    photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKf5N78lFn50X--npJiERGl_fUzSNb4QvWQ&usqp=CAU'
  };

ageVisibility(): void {
  this.user.isAgeHidden = !this.user.isAgeHidden;
}
}