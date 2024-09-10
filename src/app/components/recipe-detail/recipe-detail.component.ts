import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: any;
  ingredients: string[] = [];
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeDetails(id).subscribe((data) => {
        if (data && data.meals) {
          this.recipe = data.meals[0];
          this.ingredients = this.getIngredients(); // Get ingredients from the API response
        } else {
          this.errorMessage = 'No recipe data found.';
        }
      });
    } else {
      this.errorMessage = 'No recipe ID provided in the route.';
    }
  }

  // Extract the ingredients and measurements from the API response
  getIngredients(): string[] {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = this.recipe[`strIngredient${i}`];
      const measure = this.recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    return ingredients;
  }
}