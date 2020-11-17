import { RepositoriesComponent } from './repositories/repositories.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'events', component: EventsComponent},
  { path: 'repositories', component: RepositoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
