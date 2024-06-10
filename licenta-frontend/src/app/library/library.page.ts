import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../services/spotify.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'library.page.html',
  styleUrls: ['library.page.scss']
})
export class LibraryPage implements OnInit {
  playlists: any[] = [];

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

  openPlaylist(playlist: any) {
    const url = `https://open.spotify.com/playlist/${playlist.id}`;
    window.open(url, '_blank');
  }
}
