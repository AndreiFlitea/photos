import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs';

interface ResponseType {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class RandomPhotoService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<ResponseType>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization:
            'Client-ID tIMc9DDdQi57vsw8q2egcjVpn979QwYckmeG_85SaRs',
        },
      }
    );
  }
}
