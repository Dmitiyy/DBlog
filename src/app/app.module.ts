import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HomeModule } from './home/home.module';
import { homeReducer } from './home/store/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './home/store/home.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({home: homeReducer}),
    HomeModule,
    EffectsModule.forRoot([HomeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
