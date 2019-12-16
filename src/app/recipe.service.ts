import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://www.themealdb.com/api/json/v1/1/';
  }

  public getListByName(name: string): Observable<any> {
    return this.http.get<any[]>(this.url + 'search.php?s=' + name).pipe(catchError(this.errorHandler));
  }

  public getRecipeById(id: string): Observable<any> {
    return this.http.get<any[]>(this.url + 'lookup.php?i=' + id).pipe(catchError(this.errorHandler));
  }

  public getRandomRecipe(): Observable<any> {
    return this.http.get<any>(this.url + 'random.php').pipe(catchError(this.errorHandler));
  }
  private errorHandler(error: HttpErrorResponse): Observable<never> {
    return throwError(error.message || 'Server Error');
  }
}
