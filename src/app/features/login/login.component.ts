import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../core/services/auth/auth.service';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatDialogModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  router = inject(Router);

  constructor(private authService: AuthService, private dialog: MatDialog) {}
  
  onSubmit() {
    this.authService.login(this.username,this.password).subscribe({
      next: (response) =>{
        this.redirectHome();        
      },
      error: (error) => {
        this.openDialog('Error', 'Hubo un problema al iniciar sesion.');
      }
    });
  }

  openDialog(title: string, message: string): void {
    this.dialog.open(DialogComponent, {
      data: { title, message }
    });
  }

  redirectHome() {
    this.router.navigate(['']);
  }
  redirectRegister() {
    this.router.navigate(['register']);
  }
}
