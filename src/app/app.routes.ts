import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    { path: "", redirectTo: "/index", pathMatch: "full" },
    { path: "index", component: IndexComponent },
    { path: "list", component: ListComponent },
    { path: "details", component: DetailsComponent },
    { path: "details/:name", component: DetailsComponent },
];
