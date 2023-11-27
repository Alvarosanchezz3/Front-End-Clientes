import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../clientes/cliente';
import { ClienteService } from '../clientes/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent  implements OnInit{

  public cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente()
  }
  
  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params => {
        let id = params['id']
        if (id) {
          this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
        }
      }
    )
  }

  create(): void {
    this.clienteService.create(this.cliente)
    .subscribe(cliente => { 

      // Alert de creación de cliente
      Swal.fire('Cliente creado', `El cliente ` + cliente.nombre + ` se ha creado con éxito`, 'success') 
      
      // Cambia a la lista de clientes al crear el cliente
      this.router.navigate(['/clientes']) 
       
      }
    )
  }

  update(): void {
    this.clienteService.update(this.cliente)
    .subscribe(cliente => {

      Swal.fire('Cliente actualizado', `El cliente ` + cliente.nombre + ` ha sido actualizado con éxito`, 'success')

      this.router.navigate(['/clientes']) 
      }
    )
  }

}