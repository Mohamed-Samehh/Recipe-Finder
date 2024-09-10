// recipe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private searchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  private detailsUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

  constructor(private http: HttpClient) {}

  searchRecipes(query: string): Observable<any> {
    return this.http.get<any>(`${this.searchUrl}${query}`);
  }

  getRecipeDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.detailsUrl}${id}`);
  }
}
