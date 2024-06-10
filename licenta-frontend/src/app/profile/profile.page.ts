import {Component, OnInit} from '@angular/core';
import {UserProfile} from "../interfaces/user.profile";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-tab4',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  userProfile: UserProfile = {
    username: '',
    email: '',
    country: '',
    images: [],
    userId: ''
  };

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.userService.getProfile().subscribe({
      next: (profile: any) => {
        this.userProfile = {
          username: profile.displayName,
          email: profile.email,
          country: profile.country,
          images: profile.images,
          userId: profile.id
        };
        console.log('Profile:', this.userProfile.images[1].url);
      },
      error: (error: any) => {
        console.error('Failed to get profile:', error);
        this.router.navigate(['/login']);
      }
    });
  }

}
