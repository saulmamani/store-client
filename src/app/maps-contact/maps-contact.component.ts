import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps-contact',
  templateUrl: './maps-contact.component.html',
  styleUrls: ['./maps-contact.component.scss']
})
export class MapsContactComponent implements OnInit {

  title: string = 'Nuestra direccion';
  lat: number = -17.398608;
  lng: number = -66.053372;

  constructor() { }

  ngOnInit() {
  }

}
