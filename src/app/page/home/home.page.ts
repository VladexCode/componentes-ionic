import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import {MenuController} from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
//  componentes: Componente[] =[];

  componentes: Observable<Componente[]>;
  constructor(private menuController: MenuController,private dataService: DataService) {}

  ngOnInit() {
    this.componentes=this.dataService.getMenuOpts();
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
}
