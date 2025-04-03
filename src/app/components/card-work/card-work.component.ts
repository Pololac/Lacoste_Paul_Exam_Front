import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-work',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card-work.component.html',
  styleUrl: './card-work.component.scss'
})
export class CardWorkComponent {
  @Input() data: any;
}
