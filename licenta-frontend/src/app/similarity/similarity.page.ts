import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {PlaylistDTO} from "../interfaces/playlist";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'similarity.page.html',
  styleUrls: ['similarity.page.scss']
})

export class SimilarityPage {
  query: string = '';
  songs: any[] = [];
  foundSong: string[] = [];
  playlist: PlaylistDTO;

  constructor(private http: HttpClient, private loadingController: LoadingController) {}

  async presentLoading(message: string) {
    const loading = await this.loadingController.create({
      message: message,
      spinner: 'crescent'
    });
    await loading.present();
    return loading;
  }

  async searchSongs() {
    if (this.query.length > 1) {
      const loading = await this.presentLoading('Searching for songs...');
      this.getSongs(this.query).subscribe(data => {
        this.songs = data;
        loading.dismiss();
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

  async recommendSong() {
    const loading = await this.presentLoading('Please wait while we fetch your playlist!\n 🎵 Finding the perfect match for the song you want... 🎵');
    console.log('Recommendations based on:', this.query, this.foundSong);
    this.postData(this.foundSong).subscribe(
      response => {
        console.log('Success!', response);
        this.playlist = response;
        loading.dismiss();
      },
      error => {
        console.error('Error', error);
        loading.dismiss();
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
