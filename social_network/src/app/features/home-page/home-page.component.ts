import { CommonModule } from '@angular/common';
import { Component, inject, signal, model, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PostService } from '../../core/services/post/post.service';
import { Post } from '../../models/post.model';
import { UserService } from '../../core/services/user/user.service';
import { CommentService } from '../../core/services/comment/comment.service';
import { Comment } from '../../models/comment.model';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-home-page',
  imports: [
    MatCardModule,
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  posts: Post[] = [];
  comments: Comment[] = [];
  readonly dialog = inject(MatDialog);

  constructor(
    private postService: PostService,
    private userService: UserService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      },
    });
    this.loadPosts();
  }

  loadPosts(){
    this.postService.getposts().subscribe({
      next: response => {
        this.posts = response;
        console.log(this.posts);
        this.posts.forEach(post => {
          this.loadComments(post);
        });
      },
      error: error => {
        console.log(error);
      },
    });
  }

  loadComments(post: Post): void {
    this.commentService.getPostComments(post._id).subscribe({
      next: (comments: Comment[]) => {
        post.comments = comments;
        console.log('Comments for post', post._id, comments);
      },
      error: error => {
        console.log('Error loading comments:', error);
      },
    });
  }

  createPost(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { is_comment: false },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadPosts();
      if (result !== undefined) {
        console.log(result);
      }
    });
  }

  addComment(postId: string) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { is_comment: true, id: postId },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadPosts();
      if (result !== undefined) {
        console.log(result);
      }
    });
  }

  editComment(commentId: string, commentText: string) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { is_comment: true, text: commentText, id: commentId },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadPosts();
      if (result !== undefined) {
        console.log(result);
      }
    });
  }

  editPost() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { is_comment: false },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadPosts();
      if (result !== undefined) {
        console.log(result);
      }
    });
  }
}
