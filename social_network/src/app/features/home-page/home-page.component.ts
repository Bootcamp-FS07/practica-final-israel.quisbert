import { CommonModule } from '@angular/common';
import { Component, inject, signal, model } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

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
export class HomePageComponent {
  posts = [
    {
      id: 1,
      author: 'Simon',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    },
    {
      id: 2,
      author: 'Isra',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    },
    {
      id: 3,
      author: 'Marce',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    },
    {
      id: 4,
      author: 'Jorgo',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    },
    {
      id: 4,
      author: 'Jorgo',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    },
    {
      id: 4,
      author: 'Jorgo',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    },
  ];

  comments = [
    {
      id: 1,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      author: 'Isra',
      post: 1,
    },
    {
      id: 2,
      text: 'This is a comment 2',
      author: 'Isra',
      post: 1,
    },
    {
      id: 3,
      text: 'This is a comment 3',
      author: 'Isra',
      post: 1,
    },
    {
      id: 4,
      text: 'This is a comment 4',
      author: 'Isra',
      post: 1,
    },
  ];
  readonly dialog = inject(MatDialog);
  readonly animal = signal('');
  readonly name = model('Israel');

  createPost(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { name: this.name(), animal: this.animal() },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }

  addComment() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { name: this.name(), animal: this.animal() },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }

  editComment() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { name: this.name(), animal: this.animal() },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }

  editPost() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { name: this.name(), animal: this.animal() },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
}
