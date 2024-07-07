import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleados-lista',
  templateUrl: './empleados-lista.component.html',
  styleUrl: './empleados-lista.component.scss'
})
export class EmpleadosListaComponent {

  // CUANDO USAMOS INPUT DECIMOS QUE ESTA PROPIEDAD LA RECIBIRA DEL COMPONENTE PADRE
  @Input() data: Empleado[] = [];

  @Output() eliminarEmpleado = new EventEmitter();
  
}
