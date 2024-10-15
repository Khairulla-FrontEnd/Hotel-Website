import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section6',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './section6.component.html',
  styleUrl: './section6.component.css',
})
export class Section6Component {
  images = new Array(8).fill(0);
  selectedImg: string = '';
  select(index: number) {
    this.selectedImg = `./assets/gallery/img${index}.jpg`;
  }
  unselect() {
    this.selectedImg = '';
  }
}
