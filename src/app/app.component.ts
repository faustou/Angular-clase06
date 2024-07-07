import { AfterViewInit, Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { Empleado } from './models/empleado';
import { EmpleadosListaComponent } from './components/empleados-lista/empleados-lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  modalVisible = false;

  title = 'clase-05';

  empleadosPresentes: Empleado[] = [
    {
      id: 1,
      nombre: 'fausto',
      apellido: 'scarmato'
    },
    {
      id: 2,
      nombre: 'claudio',
      apellido: 'colapinto'
    },
    {
      id: 3,
      nombre: 'oli',
      apellido: 'verman'
    }
  ];

  empleadosAusentes: Empleado[] = [
    {
      id: 1,
      nombre: 'Louis',
      apellido: 'Litt'
    },
    {
      id: 2,
      nombre: 'Yessica',
      apellido: 'Pearson'
    },
    {
      id: 3,
      nombre: 'Michel',
      apellido: 'Ross'
    }
  ]

  @ViewChild(EmpleadosListaComponent) EmpleadosListaComponent?: EmpleadosListaComponent;

  @ViewChild ('myDiv') myDiv?: ElementRef<HTMLDivElement>;

  constructor() {
  }
  ngAfterViewInit(): void {
    console.log(this.EmpleadosListaComponent);
    console.log(this.myDiv);
  }

  eliminarEmpleado(idAEliminar: number, from: string) {

    if (from === 'empleadosPresentes') {
      this.empleadosPresentes = this.empleadosPresentes.filter((empleado) => empleado.id != idAEliminar)
    }

    if (from === 'empleadosAusentes') {
      this.empleadosAusentes = this.empleadosAusentes.filter((empleado) => empleado.id != idAEliminar)
    }


    console.log('recibimos el evento del click')
  }
}