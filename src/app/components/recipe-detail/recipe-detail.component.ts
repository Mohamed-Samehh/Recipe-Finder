import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { CommonModule, Location } from '@angular/common';

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
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeDetails(id).subscribe(
        (data) => {
          if (data && data.meals) {
            this.recipe = data.meals[0];
            this.ingredients = this.getIngredients();
          } else {
            this.errorMessage = 'No recipe data found.';
          }
          this.loading = false;
        },
        (error) => {
          this.errorMessage = 'An error occurred while fetching recipe data.';
          this.loading = false;
        }
      );
    } else {
      this.errorMessage = 'No recipe ID provided in the route.';
      this.loading = false;
    }
  }

  goBack() {
    this.location.back();
  }

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
