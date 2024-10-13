import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
  areas: any[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.recipeService.getAllAreas().subscribe((data) => {
      this.areas = data.meals.filter((meal: any) => meal.strArea !== "Unknown");
    });
  }

  viewAreaDetails(area: any): void {
    this.router.navigate(['/area', area.strArea]);
  }

  getImageUrl(area: string): string {
    const flags = {
      "British": "https://flagcdn.com/w320/gb.png",
      "Canadian": "https://flagcdn.com/w320/ca.png",
      "Chinese": "https://flagcdn.com/w320/cn.png",
      "Croatian": "https://flagcdn.com/w320/hr.png",
      "Vietnamese": "https://flagcdn.com/w320/vn.png",
      "Tunisian": "https://flagcdn.com/w320/tn.png",
      "Filipino": "https://flagcdn.com/w320/ph.png",
      "Jamaican": "https://flagcdn.com/w320/jm.png",
      "Malaysian": "https://flagcdn.com/w320/my.png",
      "American": "https://flagcdn.com/w320/us.png",
      "Dutch": "https://flagcdn.com/w320/nl.png",
      "Egyptian": "https://flagcdn.com/w320/eg.png",
      "French": "https://flagcdn.com/w320/fr.png",
      "Greek": "https://flagcdn.com/w320/gr.png",
      "Indian": "https://flagcdn.com/w320/in.png",
      "Irish": "https://flagcdn.com/w320/ie.png",
      "Italian": "https://flagcdn.com/w320/it.png",
      "Japanese": "https://flagcdn.com/w320/jp.png",
      "Kenyan": "https://flagcdn.com/w320/ke.png",
      "Mexican": "https://flagcdn.com/w320/mx.png",
      "Moroccan": "https://flagcdn.com/w320/ma.png",
      "Polish": "https://flagcdn.com/w320/pl.png",
      "Portuguese": "https://flagcdn.com/w320/pt.png",
      "Russian": "https://flagcdn.com/w320/ru.png",
      "Spanish": "https://flagcdn.com/w320/es.png",
      "Thai": "https://flagcdn.com/w320/th.png",
      "Turkish": "https://flagcdn.com/w320/tr.png",
      "Ukrainian": "https://flagcdn.com/w320/ua.png"
    };

    return flags[area] || "https://via.placeholder.com/200";
  }
}
