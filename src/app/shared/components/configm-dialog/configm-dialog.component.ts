import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-configm-dialog',
  imports: [MatDialogModule],
  templateUrl: './configm-dialog.component.html',
  styleUrl: './configm-dialog.component.css'
})
export class ConfigmDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<ConfigmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  onCancel(): void {
    this.dialogRef.close(false); 
  }

  onConfirm(): void {
    this.dialogRef.close(true); 
  }
}
