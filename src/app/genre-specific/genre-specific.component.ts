import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-genre-specific',
  templateUrl: './genre-specific.component.html',
  styleUrls: ['./genre-specific.component.css']
})
export class GenreSpecificComponent implements OnInit {
  moviesWithThisGenre: any = '';
  p: number = 1;
  totalResults: number = 1;
  constructor(private http: HttpClientService){}

  ngOnInit(): void {  
    this.http.getGenreList(this.http.genreId, this.p).subscribe((data: any) => {
      this.p = 1;
      this.totalResults = data.total_results;
      this.moviesWithThisGenre = data.results;
      console.log(data);
    })
  }

  

  changePage(p: any){
    this.p = p;
    this.http.getGenreList(this.http.genreId, this.p).subscribe((data: any) => {
      this.totalResults = data.total_results;
      console.log(data);
      
      return this.moviesWithThisGenre = data.results;
    })
  }
}
