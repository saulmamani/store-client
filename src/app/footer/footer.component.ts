import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import { MapsDialogComponent } from '../maps-dialog/maps-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openMaps() {
    this.dialog.open(MapsDialogComponent,{width: '800px', height: '450px'});
  }

}
