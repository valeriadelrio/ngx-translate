import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { } from './lang.interface';
import { LanguagesService} from '../../services/languages/languages.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


    idiomas: any = ['Inglés' , 'Español', 'Portugues'];
    idioma: any = "";
    langSession:string = "";
    // lang: Lang;


    constructor(private translate: TranslateService, private ls:LanguagesService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        // this.lang.label=['Inglés' , 'Español', 'Portugues'];
        // this.lang.id=['en' , 'es', 'pt'];
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        // translate.use('es');

    }


    ngOnInit() {

    }

    setLang(lang:string){
      switch (lang){
        case "Español": {
          this.translate.use('es');
          this.langSession = 'es';
          break;
        }
        case "Inglés": {
          this.translate.use('en');
          this.langSession = 'en';
          break;
        }
        case "Portugues": {
          this.translate.use('pt');
          this.langSession = 'pt';
          break;
        }
      }
      // location.reload();
    }

}
