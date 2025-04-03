import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-outils',
  standalone: true,
  imports: [],
  templateUrl: './card-outils.component.html',
  styleUrl: './card-outils.component.scss'
})
export class CardOutilsComponent {
  @Input() dataT: any;

}
