import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../services/spotify.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  playlists: any[] = [];  // Define a proper type for any

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    const token = sessionStorage.getItem("spotify_access_token")!;
    this.spotifyService.getUserPlaylists(token).subscribe({
      next: (data) => {
        console.log('playlists', data);
        this.playlists = data;
      },
      error: (error) => {
        console.error('Error fetching playlists:', error);
      }
    });
  }

}
