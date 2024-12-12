import { Component } from '@angular/core';
import { ImportsModule } from './imports';

@Component({
  selector: 'tri-state-checkbox-filled-demo',
  templateUrl: './tri-state-checkbox-filled-demo.html',
  styleUrls: ['./tri-state-checkbox-filled-demo.css'],
  standalone: true,
})
export class TriStateCheckboxFilledDemo {
  value: boolean | null = null;
}
