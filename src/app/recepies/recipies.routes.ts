import { RecipieStartComponent } from './recipie-start/recipie-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { Routes } from '@angular/router';


export const RECIPE_ROUTES : Routes = [
{path: '', component: RecipieStartComponent},
{path: 'new', component: RecipeEditComponent},
{path: ':id', component: RecipeDetailComponent},
{path: ':id/edit', component: RecipeEditComponent}


];