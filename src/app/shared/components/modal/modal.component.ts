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
import { Router } from '@angular/router';

export interface DialogData {
  comment_id: string;
  text: string;
  post_id: string;
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
  router = inject(Router);

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
          this.commentService
            .updateComment(this.data.comment_id,this.data.text, this.userId, this.data.post_id)
            .subscribe({
              next: response => {
                this.dialogRef.close();
              },
              error: error => {
                this.dialogRef.close();
              },
            });
        } else {
          this.commentService
            .addComment(this.data.text, this.userId, this.data.post_id)
            .subscribe({
              next: response => {
                this.dialogRef.close();
              },
              error: error => {
                this.dialogRef.close();
              },
            });
        }
      } else {        
        this.dialogRef.close();
        this.router.navigate(['/login']);
      }
    } else {
      if (this.userId !== null) {
        if (this.data.is_an_update) {
          this.postService.updatePost(this.data.post_id, this.data.text, this.userId).subscribe({
            next: response => {
              this.dialogRef.close();
            },
            error: error => {
              this.dialogRef.close();
            },
          })
        } else {
          this.postService.createPost(this.data.text, this.userId).subscribe({
            next: response => {
              this.dialogRef.close();
            },
            error: error => {
              this.dialogRef.close();
            },
          });
        }
      } else {
        this.dialogRef.close();
        this.router.navigate(['/login']);
      }
    }
  }
}
