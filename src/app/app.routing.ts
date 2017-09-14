import { ModuleWithProviders } from '@angular/core';
// Importa o modulo de rotas do Angular 2
import { Routes, RouterModule } from '@angular/router';

// Importa seus componentes criados
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeFormComponent } from './employees/employee-form/employee-form.component';


// Cria nossas Rotas
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: EmployeesComponent },
  { path: 'employees/new', component: EmployeeFormComponent},
  { path: 'employees/:id', component: EmployeeFormComponent},
  { path: 'employees/:id/edit', component: EmployeeFormComponent}
];

// Exporta a constante routing para importarmos ela no arquivo app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
