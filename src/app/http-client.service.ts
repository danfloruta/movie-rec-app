import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }
  genreId: number = 0;
  movieId: number = 0;

  getPopularMovies(page: number): Observable<any>{
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=b4a51986e26adc678e2fb14b16b1224d&page=${page}`);
  }

  getTopRatedMovies(page: number,vote_avg: number): Observable<any>{
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=b4a51986e26adc678e2fb14b16b1224d&vote_average.gte=${vote_avg}&popularity.gte=100000&language=en&vote_count.gte=100&page=${page}`)
  }
  getMovieGenres(page: number): Observable<any>{
    return this.httpClient.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=b4a51986e26adc678e2fb14b16b1224d&page=${page}`)
  }
  getGenreList(genreId: number, page: number){
      return this.httpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=b4a51986e26adc678e2fb14b16b1224d&with_genres=${genreId}&page=${page}`)
  }
  getMovieById(id: number){
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b4a51986e26adc678e2fb14b16b1224d`)
  }
  getMovieCast(id: number){
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=b4a51986e26adc678e2fb14b16b1224d`)
  }
  getMovieTrailer(id: number){
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=b4a51986e26adc678e2fb14b16b1224d`)
  }
}
