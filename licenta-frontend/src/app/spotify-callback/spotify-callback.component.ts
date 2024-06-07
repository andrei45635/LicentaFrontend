import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SpotifyService} from "../services/spotify.service";

@Component({
  selector: 'spotify-callback',
  templateUrl: './spotify-callback.component.html',
  styleUrls: ['./spotify-callback.component.scss'],
})

export class SpotifyCallbackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   const code = params['code'];
    //   console.log('URL', window.location.href);
    //   console.log('code', code);
    //   if (code) {
    //     this.exchangeCodeForToken(code);
    //   } else {
    //     console.error('Authorization code not found. Redirecting to login.');
    //     this.router.navigate(['/login']);
    //   }
    // });
    console.log('in spotify callback ngOnInit');
    this.spotifyService.getAccessToken().subscribe({
      next: (token: any) => {
        console.log('token', token);
        sessionStorage.setItem('spotify_access_token', token);
      },
      error: (error: any) => {
        console.error('Failed to get access token:', error);
        this.router.navigate(['/login']);
      }
    });
    this.router.navigate(['/tabs/profile']);
  }

  private exchangeCodeForToken(code: string): void {
    this.spotifyService.exchangeCodeForToken(code).subscribe({
      next: (token: any) => {
        console.log('token', token);
        sessionStorage.setItem('spotify_access_token', token);
        this.router.navigate(['/tabs/profile']);
      },
      error: (error: any) => {
        console.error('Failed to exchange code for token:', error);
        this.router.navigate(['/login']);
      }
    });
  }
}
// export class SpotifyCallbackComponent implements OnInit {
//   constructor(private route: ActivatedRoute, private router: Router, private authService: SpotifyService) {
//   }
//
//   ngOnInit() {
//     this.router.navigate(['tabs/profile']);
//   }
//
//   isTokenExpired() {
//     const expiresAt = sessionStorage.getItem('token_expires_at');
//     if (!expiresAt) {
//       return true;
//     }
//     return new Date().getTime() > parseInt(expiresAt, 10);
//   }
//
// }


// const hash = window.location.hash.substr(1);
// console.log('hash', hash);
// const result = hash.split('&').reduce(function (acc: any, item) {
//   const [key, value] = item.split('=');
//   acc[key] = decodeURIComponent(value);
//   return acc;
// }, {} as AuthResult);
//
// if (result.access_token && result.expires_in) {
//   const expiresAt = new Date().getTime() + parseInt(result.expires_in, 10) * 1000;
//   sessionStorage.setItem('access_token', result.access_token);
//   sessionStorage.setItem('token_expires_at', expiresAt.toString());
//   this.router.navigate(['/tabs/profile'], {relativeTo: this.route});
// } else {
//   console.error('Token or expiry time not found in hash.');
//   this.router.navigate(['/login']);
// }
