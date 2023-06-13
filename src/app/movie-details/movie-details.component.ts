import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { ActivatedRoute, Route } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
movieId: number = 0;
movieCast: any ='';
movie: any = '';
trailerKey: SafeResourceUrl = '';

constructor(private http: HttpClientService, private route: ActivatedRoute, private sanitizer: DomSanitizer){}

ngOnInit(): void {
  this.route.params.subscribe( (params: any) => {
    this.movieId = params.id
  })
  console.log(this.movieId);
  this.http.getMovieById(this.movieId).subscribe((data: any) => {
    this.movie = data;
    console.log(data); 
  })
  this.http.getMovieCast(this.movieId).subscribe((data: any) => {
    this.movieCast = data.cast.map((name: string) => name);
    console.log(this.movieCast);
  })
  this.http.getMovieTrailer(this.movieId).subscribe((data: any)=> {
    this.trailerKey = this.sanitizer.bypassSecurityTrustResourceUrl((`https://www.youtube.com/embed/` + data.results[10].key))
    console.log(`https://www.youtube.com/embed/` + data.results[10].key);    
  })
}
}
