import { Component } from '@angular/core';
import { RandomPhotoService } from '../random-photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent {
  photoLink = '';
  constructor(private randomPhoto: RandomPhotoService) {
    this.fetchPhoto();
  }

  changePhoto() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.randomPhoto.getData().subscribe((response) => {
      this.photoLink = response.urls.regular;
    });
  }
}
