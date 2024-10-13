import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryDishesComponent } from './components/category-dishes/category-dishes.component';
import { AreasComponent } from './components/areas/areas.component';
import { AreaDetailsComponent } from './components/area-details/area-details.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'search', component: RecipeSearchComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:categoryName', component: CategoryDishesComponent },
  { path: 'areas', component: AreasComponent },
  { path: 'area/:areaName', component: AreaDetailsComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent }
];
