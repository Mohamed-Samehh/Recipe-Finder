import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1/';

  constructor(private http: HttpClient) {}

  // Search for Recipes using a query string
  searchRecipes(query: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}search.php?s=${query}`);
  }

  // Get details of a recipe by its ID
  getRecipeDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}lookup.php?i=${id}`);
  }

  // Get a list of all categories
  getAllCategories(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}categories.php`);
  }

  // Filter meals by category
  filterMealsByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}filter.php?c=${category}`);
  }

  // Get a list of all areas
  getAllAreas(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}list.php?a=list`);
  }

  // Filter meals by area
  filterMealsByArea(area: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}filter.php?a=${area}`);
  }
}
