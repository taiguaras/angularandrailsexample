import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EmployeeService {

  // URL da nossa API
  private url: string = 'http://localhost:3000/employees';

  constructor(private http: Http) { }

  // Pega os employees na API
  getEmployees() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  // Pega um employee na API
  getEmployee(id) {
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }

  // Adiciona um employee na API
  addEmployee(employee) {
    return this.http.post(this.url, {'employee': employee})
      .map(res => res.json());
  }

  // Atualiza um employee na API
  updateEmployee(employee) {
    return this.http.put(this.url + '/' + employee.id, {'employee': employee})
      .map(res => res.json());
  }

  // Apaga uma employee no servidor
  deleteEmployee(id) {
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json());
  }

}
