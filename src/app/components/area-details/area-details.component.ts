import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-area-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './area-details.component.html',
  styleUrls: ['./area-details.component.css']
})
export class AreaDetailsComponent implements OnInit {
  dishes: any[] = [];
  paginatedDishes: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number = 1;
  loading: boolean = true;
  areaName: string | null = '';
  errorMessage: string = '';

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.areaName = params.get('areaName');
      this.loadDishesByArea(this.areaName);
    });
  }

  loadDishesByArea(area: string | null): void {
    if (area) {
      this.recipeService.filterMealsByArea(area).subscribe(
        response => {
          this.dishes = response.meals || [];
          this.loading = false;
          this.paginate();
        },
        error => {
          this.errorMessage = 'An error occurred while fetching dishes.';
          this.loading = false;
        }
      );
    } else {
      this.errorMessage = 'No area name provided in the route.';
      this.loading = false;
    }
  }

  viewRecipeDetail(dish: any): void {
    this.router.navigate(['/recipe', dish.idMeal]);
  }

  paginate(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedDishes = this.dishes.slice(start, end);
    this.totalPages = Math.ceil(this.dishes.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.paginate();
  }

  pagesToDisplay1(): number[] {
    return Array(Math.min(5, this.totalPages)).fill(0).map((_, i) => i + 1);
  }

  pagesToDisplay2(): number[] {
    if (this.totalPages > 5) {
      return Array(this.totalPages - 5).fill(0).map((_, i) => i + 6);
    }
    return [];
  }
}
