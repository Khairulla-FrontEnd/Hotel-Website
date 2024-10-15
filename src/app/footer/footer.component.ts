import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  links1 = [
    'About',
    'Services',
    'Approach',
    'Sustainability',
    'News',
    'Careers',
  ];
  links2 = ['Children', 'Women', 'Bible Study', 'Church', 'Missionaries'];
  links3 = [
    'bx bxl-facebook',
    'bx bxl-twitter',
    'bx bxl-instagram',
    'bx bxl-venmo',
  ];
}
