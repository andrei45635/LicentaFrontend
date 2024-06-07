import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {PlaylistDTO} from "../interfaces/playlist";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  query: string = '';
  songs: any[] = [];
  foundSong: string[] = [];
  playlist: PlaylistDTO;

  constructor(private http: HttpClient) {}

  searchSongs() {
    if (this.query.length > 1) {
      this.getSongs(this.query).subscribe(data => {
        this.songs = data;
        console.log('tracks', this.songs);
      });
    }
  }

  getSongs(query: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/spotify/track-suggestions?query=${encodeURIComponent(query)}`, {
      headers: { 'Authorization': `Bearer ${sessionStorage.getItem("spotify_access_token")!}` }
    }).pipe(
      map(response => response.map(item => ({
        name: item.name,
        artist: item.artist,
        album: item.album,
        images: item.images
      })))
    );
  }

  selectSong(song: any) {
    this.query = `${song.name} by ${song.artist} - Album: ${song.album}`;
    this.foundSong = [song.name, song.artist, song.album, sessionStorage.getItem("spotify_access_token")!];
    this.songs = [];
  }

  recommendSong() {
    console.log('Recommendations based on:', this.query, this.foundSong);
    this.postData(this.foundSong).subscribe(
      response => {
        console.log('Success!', response);
        this.playlist = response;
      },
      error => {
        console.error('Error', error);
      }
    );
  }

  postData(data: any): Observable<any> {
    return this.http.post('http://localhost:5000/api', {data: data});
  }


  // displaySuggestions(suggestions: any) {
  //   const suggestionsContainer = document.getElementById('suggestions-container');
  //   suggestionsContainer!.innerHTML = '';
  //
  //   suggestions.forEach(suggestion => {
  //     const entry = document.createElement('div');
  //     entry.classList.add('suggestion-entry');
  //
  //     const img = document.createElement('img');
  //     img.src = suggestion.image.url; // Accessing the URL from the ImageDTO
  //     img.alt = 'Album cover';
  //     img.style.height = `${suggestion.image.height}px`; // Optionally use height and width
  //     img.style.width = `${suggestion.image.width}px`;
  //     img.classList.add('album-image');
  //
  //     const text = document.createElement('div');
  //     text.textContent = `${suggestion.trackName} by ${suggestion.artistName} - Album: ${suggestion.albumName}`;
  //     text.classList.add('suggestion-text');
  //
  //     entry.appendChild(img);
  //     entry.appendChild(text);
  //     suggestionsContainer!.appendChild(entry);
  //   });
  // }


}
