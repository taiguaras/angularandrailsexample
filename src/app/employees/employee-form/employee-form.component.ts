import { Component, OnInit } from '@angular/core';

// Importa nosso service para conseguirmos falar com a API
import { EmployeeService } from '../shared/employee.service';
// Importa nosso Model
import {Employee} from '../shared/employee';
// Importa o Router para podermos conseguir pegar o parâmetro id
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {


  // Cria uma variável string para falarmos se é uma edição ou criação de Employee
  title: string;
  // Pega nosso Model e coloca na variável employee
  employee: Employee = new Employee();

  constructor(
    // Declara nossas dependências
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  // Esse método rola enquanto a página é carregada para preencher
  // a question caso seja edição
  ngOnInit() {
    let id = this.route.params.subscribe(params => {
      let id = params['id'];

      this.title = id ? 'Edit Employee' : 'Create Employee';

      if (!id) {
          return;
        }

      this.employeeService.getEmployee(id)
        .subscribe(
          employee => this.employee = employee,
          response => {});
    });
  }

  // Nós chamamos esse método no form quando estamos prontos para criar
  // uma questão ou editar
  save() {
    let result;

    if (this.employee.id) {
      result = this.employeeService.updateEmployee(this.employee);
    } else {
      result = this.employeeService.addEmployee(this.employee);
    }

    result.subscribe(data => this.router.navigate(['/']));
  }



}
