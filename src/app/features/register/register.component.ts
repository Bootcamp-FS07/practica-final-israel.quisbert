import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../core/services/auth/auth.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username= '';
  password = '';
  password_verification = '';
  router = inject(Router);

  constructor(private authService: AuthService, private dialog: MatDialog) {}

  onSubmit(){
    if (this.password !== this.password_verification) {
      this.openDialog('Error', 'Las contraseñas no coinciden.');
      return;
    }

    this.authService.createNewUser(this.username,this.password).subscribe({
      next: (response) =>{
        this.openDialog('Éxito', 'Usuario creado exitosamente.');
        this.redirectLogin();
      },
      error: (error) => {
        this.openDialog('Error', 'Hubo un problema al crear el usuario.');
      }
    });
  }
  openDialog(title: string, message: string): void {
    this.dialog.open(DialogComponent, {
      data: { title, message }
    });
  }
  redirectLogin() {
    this.router.navigate(['login']);
  }
}
