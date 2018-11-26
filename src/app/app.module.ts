import { BrowserModule } from '@angular/platform-browser';
import { NgModule, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { RouterModule, Routes} from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { TodoServiceService } from './todo-service.service';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SiteFormComponent } from './shared/layouts/site-form/site-form.component';
import { LoginFormComponent } from './shared/layouts/login-form/login-form.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { Auth2Service } from './shared/services/auth_2.service';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AuthFormComponent,
    SiteFormComponent,
    LoginFormComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,


  ],
  providers: [TodoServiceService, AuthGuard, Auth2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
