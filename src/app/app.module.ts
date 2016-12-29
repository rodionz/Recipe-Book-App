import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecipeListComponent } from './recepies/recipe-list/recipe-list.component';
import { RecepeItemComponent } from './recepies/recipe-list/recepe-item.component';
import { RecipeDetailComponent } from './recepies/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeEditComponent } from './recepies/recipe-edit/recipe-edit.component';
import { RecipieStartComponent } from './recepies/recipie-start/recipie-start.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecipeListComponent,
    RecepeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    RecipeEditComponent,
    RecipieStartComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
