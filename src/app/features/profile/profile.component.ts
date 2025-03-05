import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  userId = '';
  username = '';

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe({
      next: (response) =>{
        this.userId = response._id;
        this.username = response.username;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  
  
}
