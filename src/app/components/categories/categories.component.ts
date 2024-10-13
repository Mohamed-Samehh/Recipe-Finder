import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  selectedCategory: any;
  isModalOpen = false;

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.recipeService.getAllCategories().subscribe((data) => {
      this.categories = data.categories;
    });
  }

  openModal(category: any): void {
    this.selectedCategory = category;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  viewCategoryDetails(category: any): void {
    this.router.navigate(['/category', category.strCategory]);
  }
}
