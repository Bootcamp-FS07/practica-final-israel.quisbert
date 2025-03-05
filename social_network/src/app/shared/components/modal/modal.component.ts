import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from '../../../core/services/post/post.service';
import { CommentService } from '../../../core/services/comment/comment.service';
import { CommonModule } from '@angular/common';

export interface DialogData {
  id: string;
  text: string;
  is_comment: boolean;
  is_an_update: boolean;
}

@Component({
  selector: 'app-modal',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatDialogModule,
    CommonModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  readonly dialogRef = inject(MatDialogRef<ModalComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  userId = localStorage.getItem('userId');

  constructor(
    private postService: PostService,
    private commentService: CommentService
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }

  onOkClick() {
    if (this.data.is_comment) {
      if (this.userId !== null) {
        if (this.data.is_an_update) {
        } else {
          this.commentService
            .addComment(this.data.text, this.userId, this.data.id)
            .subscribe({
              next: response => {
                console.log(response);
                this.dialogRef.close();
              },
              error: error => {
                console.log(error);
                this.dialogRef.close();
              },
            });
        }
      } else {
        console.log('Usuario no autenticado');
      }
    } else {
      if (this.userId !== null) {
        if (this.data.is_an_update) {
        } else {
          this.postService.createPost(this.data.text, this.userId).subscribe({
            next: response => {
              console.log(response);
              this.dialogRef.close();
            },
            error: error => {
              console.log(error);
              this.dialogRef.close();
            },
          });
        }
      } else {
        console.log('Usuario no autenticado');
      }
    }
  }
}
