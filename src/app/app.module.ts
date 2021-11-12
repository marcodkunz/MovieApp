import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/root/app.component';
import {HomeComponent} from './components/home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import { ImagePipe } from './pipes/image.pipe';
import {CarouselModule} from "primeng/carousel";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImagePipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        CarouselModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
