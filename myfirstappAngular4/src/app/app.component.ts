import { Component } from '@angular/core';
import {PostService} from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  title : string;
  email:  string;
  website:  string;
  hobbies:  string[];
  showHobbies: boolean;
  posts: Ipost[];


constructor(private postService:PostService){
  this.title = 'Katherine';
  this.email= 'katherinam35@gmail.com';
  this.website= 'https://katherinaguilera.github.io/';
  this.hobbies= ['Sing', 'Anime', 'Eat'];
  this.showHobbies= false;
  this.postService.getPosts().subscribe(posts => {
    this.posts = posts;
  });
  }
 toggleHobbies(){ // metodo
   this.showHobbies = !this.showHobbies; // falso sino verdadero
 }
 newHobby(hobbynuevo){
   this.hobbies.push(hobbynuevo.value);
   hobbynuevo.value = '';
   return false;
 }
}

interface Ipost {
  id: string;
  title: string;
  body: string;
}