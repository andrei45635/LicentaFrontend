import {Component} from '@angular/core';
import {PlaylistDTO} from "../interfaces/playlist";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  query: string = '';
  songs: any[] = [];
  foundSong: string[] = [];
  playlist: PlaylistDTO;

  constructor(private http: HttpClient) {
  }

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
      headers: {'Authorization': `Bearer ${sessionStorage.getItem("spotify_access_token")!}`}
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
    return this.http.post('http://localhost:5000/api/emotions/eng', {data: data});
  }
}

