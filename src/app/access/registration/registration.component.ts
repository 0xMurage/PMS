import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  title: string;

  constructor() {
  }

  ngOnInit(): void {
    this.title = environment.app.title;
  }

  signUpWithGoogle(): void {

  }

  signUpWithFacebook(): void {

  }

  signUpWithPasswordEmail(): void {

  }

  get artMediaSectionStyle(): string {
   return  `backgroundImage:url(https://firebasestorage.googleapis.com/v0/b/` +
      `${environment.firebase.storageBucket}/o/${environment.firebase.storagePaths.publicImages}bg1.jpg?alt=media)`;
  }
}
