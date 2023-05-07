import { Component, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import $ from 'jquery';
import { AcessibilidadeService } from './services/acessibilidade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent  {

  title = 'Gerador CPFCNPJ';

  constructor (private acessibilidadeService: AcessibilidadeService, private renderer: Renderer2) {}


    ngOnInit(): void {
    this.acessibilidadeService.themeChanges().subscribe(theme => {
      if (theme.oldValue) {
        this.renderer.setAttribute(document.body, "data-bs-theme", theme.oldValue);
      }
      this.renderer.setAttribute(document.body, "data-bs-theme", theme.newValue);
    })
  }

}