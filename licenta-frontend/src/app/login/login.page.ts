import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {}
  loginWithSpotify() {
    const getSpotifyUserLogin = () =>{
      fetch("http://localhost:8080/auth/spotify/login").then((response) => response.text())
        .then(response => {
          window.location.replace(response);
        });
    }

    getSpotifyUserLogin();
  }

  private generateRandomString(length: number): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}



//TODO: hide this in a .env file
// const clientId = 'a43ef21f342246aab5ccbd5a7447eab9';
// const redirectURI = encodeURIComponent('http://localhost:8080/auth/spotify/callback') //TODO: fix authcontroller in backend
// const scopes = encodeURIComponent('user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming playlist-read-private playlist-read-collaborative playlist-modify-public user-follow-read user-read-playback-position user-top-read user-read-recently-played user-library-modify user-library-read');
// const responseType = 'code';
//
// // generate random state for security
// const state = encodeURIComponent(this.generateRandomString(16));
// window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes}&response_type=${responseType}&state=${state}`;
