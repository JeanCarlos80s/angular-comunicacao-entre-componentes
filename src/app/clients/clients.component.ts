import { Component, OnInit } from '@angular/core';
import { Client } from './client.module';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  name: string;
  age: number;
  clients: Client[] = [];

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.clients.push(
      { name: this.name, age: this.age }
    )

    this.clearForm();
  }

  deleteClient(i) {
    this.clients.splice(i, 1);
  }

  updateClient(c: Client, i) {
    this.clients[i].name = c.name;
    this.clients[i].age = c.age;
  }

  clearForm() {
    this.name = '';
    this.age = 0;
  }

}
