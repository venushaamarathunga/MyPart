import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms'

import { EnvironmentUrlService } from './services/environment-url.service'
import { AppComponent } from './app.component';
import { CreateformComponent } from './createform/createform.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'createform', component: CreateformComponent },

    ])
  ],
  providers: [
    EnvironmentUrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
