import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service'
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})


export class ClientesComponent implements OnInit {
  title = 'Listado de clientes:';

  // Array para almacenar los datos de los clientes
  clientes: Cliente[];

  // Constructor que inyecta el servicio ClienteService
  constructor(private clienteService: ClienteService) { }

  // Método del componente que se ejecuta al inicializarse
  ngOnInit() {
    // Llamada al método getClientes del servicio y suscripción al resultado
    this.clienteService.getClientes().subscribe(
      // Función callback que asigna los datos de clientes al array clientes
      (clientes) => this.clientes = clientes
    ); 
  }

  delete(cliente: Cliente): void {
    
    Swal.fire({
      title: "Estás seguro?",
      text: "No se puede revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
          }
        )
 
        Swal.fire({
          title: "Cliente borrado!",
          text: "El cliente fue borrado con éxito",
          icon: "success"
        });
      }
    });
  }
}

