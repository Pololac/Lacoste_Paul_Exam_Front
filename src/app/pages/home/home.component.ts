import { Component } from '@angular/core';
import { CardOutilsComponent } from '../../components/card-outils/card-outils.component';
import { CardWorkComponent } from '../../components/card-work/card-work.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardOutilsComponent, CardWorkComponent, NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  workElements = [
    { imageUrl: 'assets/images/exam1.webp', title: 'Productivité maximale', contenu: 'Lorem ipsum dolor sit amet. Ut tempore' },
    { imageUrl: 'assets/images/exam2.webp', title: 'Collaboration facile', contenu: 'Lorem ipsum dolor sit amet. Ut tempore' },
    { imageUrl: 'assets/images/exam3.webp', title: 'Sécurité garantie ', contenu: 'Lorem ipsum dolor sit amet. Ut tempore' },
    { imageUrl: 'assets/images/exam4.webp', title: 'Accessible partout', contenu: 'Lorem ipsum dolor sit amet. Ut tempore' },
  ];
  
  
  toolElements = [
    { number: 1, title: 'Agenda intelligent', contenu: 'Lorem ipsum dolor sit amet. Ut tempore voluptas non quis pariatur et maiores laudantium non adipisci enim. Et atque sapiente id maxime ipsa eos beatae debitis.' },
    { number: 2, title: 'Outils de productivité', contenu: 'Lorem ipsum dolor sit amet. Ut tempore voluptas non quis pariatur et maiores laudantium non adipisci enim. Et atque sapiente id maxime ipsa eos beatae debitis.' },
    { number: 3, title: 'Communication fluide', contenu: 'Lorem ipsum dolor sit amet. Ut tempore voluptas non quis pariatur et maiores laudantium non adipisci enim. Et atque sapiente id maxime ipsa eos beatae debitis.' },
    { number: 4, title: 'Tableaux de bord', contenu: 'Lorem ipsum dolor sit amet. Ut tempore voluptas non quis pariatur et maiores laudantium non adipisci enim. Et atque sapiente id maxime ipsa eos beatae debitis.' },
    { number: 5, title: 'Partage facile', contenu: 'Lorem ipsum dolor sit amet. Ut tempore voluptas non quis pariatur et maiores laudantium non adipisci enim. Et atque sapiente id maxime ipsa eos beatae debitis.' },
  ];

}
