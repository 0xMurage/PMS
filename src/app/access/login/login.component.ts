import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  title: string;

  constructor() {
  }

  ngOnInit(): void {
    this.title = environment.app.title;
  }

  signInWithGoogle(): void {

  }

  signInWithFacebook(): void {

  }

  signInWithPasswordEmail(): void {

  }

  get artMediaSectionStyle(): string {
    return `backgroundImage:url(https://firebasestorage.googleapis.com/v0/b/` +
      `${environment.firebase.storageBucket}/o/${environment.firebase.storagePaths.publicImages}bg1.jpg?alt=media)`;
  }

}
