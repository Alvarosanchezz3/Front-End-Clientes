import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteService } from './components/clientes/cliente.service';
import { FormComponent } from './components/form/form.component';
import { TecnsComponent } from './components/tecns/tecns.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, ClientesComponent, FormComponent, TecnsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClienteService]
})

export class AppComponent {
  title = 'Bienvenido a Angular';
}