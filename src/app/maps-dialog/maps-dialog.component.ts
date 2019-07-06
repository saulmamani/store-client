import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-maps-dialog',
  templateUrl: './maps-dialog.component.html',
  styleUrls: ['./maps-dialog.component.scss']
})
export class MapsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MapsDialogComponent>) { }

  ngOnInit() {
  }

}
