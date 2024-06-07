import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private apiUrl = 'https://api.spotify.com/v1';
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getProfile() {
    const accessToken = sessionStorage.getItem('access_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });

    return this.http.get(`${this.apiUrl}/me`, { headers });
  }

  exchangeCodeForToken(code: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/auth/spotify/get-user-code?code=${code}`, { responseType: 'text' as 'json' });
  }

  getUserPlaylists(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.baseUrl}/api/spotify/get-user-playlists`, { headers });
  }

  getAccessToken(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/auth/spotify/get-access-token`, { responseType: 'text' as 'json' });
  }

}
