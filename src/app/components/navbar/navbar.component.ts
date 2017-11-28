import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    binding: string = "";
    idiomas: any = ['Inglés' , 'Español', 'Portugues'];
    uno: any = this.idiomas[0];


    constructor(translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        // translate.use('es');
    }


    ngOnInit() {

    }

    HttpLoaderFactory(http: HttpClient) {
        return new TranslateHttpLoader(http, "assets/i18n/", ".json");
    }

    setLang(translate: TranslateService){
        console.log("Hola");
        console.log(translate.getDefaultLang);
      translate.use('pt');
    }



}
