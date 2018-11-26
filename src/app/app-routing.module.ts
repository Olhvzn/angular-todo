import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { SiteFormComponent } from './shared/layouts/site-form/site-form.component';
import { LoginFormComponent } from './shared/layouts/login-form/login-form.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { TodoComponent } from './components/todo/todo.component';
import { AuthGuard } from './guards/auth.guard';


 const routes: Routes = [
    {
     path: '', component: LoginFormComponent, children : [
       {path: '', redirectTo: '/login', pathMatch: 'full'},
       {path: 'login', component: AuthFormComponent},
       {path: 'registration', component: RegistrationPageComponent}
     ]
    },
    {path: 'todo', component: TodoComponent ,  canActivate: [AuthGuard]}

];

@NgModule({
 imports : [
  RouterModule.forRoot(routes)
 ],

 exports: [
  RouterModule
 ]
})

export class AppRoutingModule {

}
