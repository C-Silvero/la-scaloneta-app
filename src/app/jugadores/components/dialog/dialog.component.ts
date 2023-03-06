import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Jugador } from '../../interfaces';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject( MAT_DIALOG_DATA ) public jugador: Jugador
  ) { }

  ngOnInit() {
  }

  borrar(){
    this.dialogRef.close(true)
  }

  cancelar(){
    this.dialogRef.close()
  }

}
