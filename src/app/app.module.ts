import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
// Adicionamos o arquivo routing
import { routing } from './app.routing';

// Inclui nossos components
import { EmployeeFormComponent } from './employees/employee-form/employee-form.component';
import { EmployeeService } from './employees/shared/employee.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
