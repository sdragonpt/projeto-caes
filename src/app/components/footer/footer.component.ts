import { Component, OnInit } from '@angular/core';

import { Autores } from '../../models/Autores';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  autor: Autores[];

  constructor() {
     this.autor= [
      {
      nome: "Sérgio Ribeiro",
      numero: 76517,
      email: "sergionunoribeiro@gmail.com"
      },
      {
        nome: "Nuno Silva",
        numero: 72490,
        email: "nunotiago98@gmail.com"
      }
      ,
      {
        nome: "Lucas Marques",
        numero: 76897,
        email: "lucasfilipemarques@hotmail.com"
      }
      ]
      
      }

  ngOnInit(): void {
  }

}
