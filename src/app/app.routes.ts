import { Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FormComponent } from './components/form/form.component';
import { TecnsComponent } from './components/tecns/tecns.component';

export const routes: Routes = [
    {path: '', redirectTo: '/tecns', pathMatch: 'full'},
    {path: 'clientes', component: ClientesComponent},
    {path: 'form', component: FormComponent},
    {path: 'form/:id', component: FormComponent},
    {path: 'tecns', component: TecnsComponent},
];