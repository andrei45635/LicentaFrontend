import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import {Injectable} from "@angular/core";
import {UserProfile} from "../interfaces/user.profile";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`http://localhost:8080/auth/spotify/get-user-info`);
  }

}
