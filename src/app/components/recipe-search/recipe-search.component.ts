import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
  recipes: any[] = [];
  searchTerm: string = '';
  noResults: boolean = false;
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 6;
  paginatedRecipes: any[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.loadAllRecipes();
  }

  loadAllRecipes(): void {
    this.recipeService.searchRecipes('').subscribe((response) => {
      this.recipes = response.meals || [];
      this.noResults = this.recipes.length === 0;
      this.paginate();
    });
  }

  search(): void {
    this.currentPage = 1;
    this.recipeService.searchRecipes(this.searchTerm).subscribe((response) => {
      this.recipes = response.meals || [];
      this.noResults = this.recipes.length === 0;
      this.paginate();
    });
  }

  viewRecipeDetail(recipe: any) {
    this.router.navigate(['/recipe', recipe.idMeal]);
  }

  paginate(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedRecipes = this.recipes.slice(start, end);
    this.totalPages = Math.ceil(this.recipes.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.paginate();
  }
}