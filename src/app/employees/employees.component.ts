import { Component, OnInit } from '@angular/core';

// Importa nosso Service
import { EmployeeService } from './shared/employee.service';
// Importa nosso model
import {Employee} from './shared/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  private employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  // Pega a listagem de Questions ao iniciar
  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }

  // Apaga a questão
  deleteEmployee(employees) {
    if (confirm('Você tem certeza que quer deletar a pessoa ' + employees.nome + '?')) {
      let index = this.employees.indexOf(employees);
      this.employees.splice(index, 1);
      this.employeeService.deleteEmployee(employees.id)
        .subscribe(null);
    }
  }

}
