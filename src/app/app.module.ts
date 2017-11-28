import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Translate
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
//HttpLoader
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

//
import { NgModel, FormControlName, NgSelectOption } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NgModel,
    FormControlName,
    NgSelectOption
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
