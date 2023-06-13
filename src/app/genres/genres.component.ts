import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: any[] = [];
  p: number = 1;
  genreArray: string[] = [];
  genreId: number = 0;
  constructor(private http: HttpClientService, private router: Router){}

ngOnInit(): void {
  this.http.getMovieGenres(this.p).subscribe((data: any) => {
    console.log(data.genres);
    this.genres = data.genres;
    this.genreArray = this.genres.map((genre: any, i:number) => genre.id)    
    console.log(this.genreArray);   
  })
}
  getIdFromTemplate(id: number){
    this.genreId = id;
    console.log(id);
    this.router.navigate(['/genre'])
    this.http.genreId = id;
  }
  
}
