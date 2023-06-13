import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  constructor(private http: HttpClientService){}
highRateMovies: any[] = [];
p: number = 1;
totalResults = 0;
rating: number = 8;
ngOnInit(): void {
  this.http.getTopRatedMovies(this.p, this.rating).subscribe((data: any) => {
    this.totalResults = data.total_results;
    this.p = data.page;
    this.highRateMovies = data.results
    console.log(data);
  })
}
changeRating(val: any){
  this.http.getTopRatedMovies(this.p, val).subscribe((data: any) => {
    this.totalResults= data.total_results;
    this.p = data.page;
    this.rating = val;
    console.log(data);
    return this.highRateMovies = data.results
  })
}

changePage(p: any){
  this.p = p;
  this.http.getTopRatedMovies(p, this.rating).subscribe((data: any) => {
    return this.highRateMovies = data.results;
  })
}

}

