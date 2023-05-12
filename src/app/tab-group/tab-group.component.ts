import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITab } from '../interfaces/tab.interface';
import { timeout, timer } from 'rxjs';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit {
  public tabs: Array<ITab> = [];
  public formulario: FormGroup;
  constructor() {
      this.formulario = new FormGroup({
          nomeTab: new FormControl("")
      })
      this.tabs = []
  }

  ngOnInit(): void {
      this.adicionarTab("", true)
  }

  adicionarTab(nomeTab: string, visivel: boolean = false): void {
    if(nomeTab === ""){
      nomeTab = "Nova aba " + this.tabs.length
    }
    let tab : ITab = {
      nome: nomeTab,
      visivel: visivel
    }
    this.tabs = [...this.tabs, tab]
  }

  exibirTab(index: number): void{
    for(let i = 0; i < this.tabs.length; i++){
          this.tabs[i].visivel = false
    }
      this.tabs[index].visivel = true
  }

  excluirTab(index: number): void{
      this.tabs.splice(index, 1)
  }

    get nomeTab (): string {
    return this.formulario.get('nomeTab')?.value
  }
}