import { Component, OnInit } from '@angular/core';
import { MobileService } from './mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructeur() {

  }
  mobiles = [
    {
      name: 'mac',
      price: 50000,
      ram: 16,
      storage: 100
    },
    {
      name: 'Accer',
      price: 50000,
      ram: 16,
      storage: 100
    },
    {
      name: 'DELL',
      price: 20000,
      ram: 16,
      storage: 120
    },
  ];

  ngOnInit(): void {
    
  }
}
