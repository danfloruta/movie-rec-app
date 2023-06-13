import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  movies: any[] = [];
  p: number = 1;
  totalResults = 0;
  constructor(private httpClient: HttpClientService){}

ngOnInit(): void {
    this.httpClient.getPopularMovies(this.p).subscribe((data: any) => {
      this.totalResults = data.total_results;
      this.p = data.page;
      this.movies = data.results;
      console.log(data.results);
      
  })}

  changePage(p: any){
    this.p = p;
    this.httpClient.getPopularMovies(this.p).subscribe((data: any) => {
      return this.movies = data.results;
    })
  }
}
