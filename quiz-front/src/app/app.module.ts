import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import {ProviderService} from './shared/services/provider.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProviderService,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
