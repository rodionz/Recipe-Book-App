import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RouterModule, Routes } from '@angular/router';


const APP_ROUTES: Routes = [
{ path:"", redirectTo: '/recipes', pathMatch : 'full'},
{path:'recipes', component: RecepiesComponent},
{path: 'shopping-list', component : ShoppingListComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);