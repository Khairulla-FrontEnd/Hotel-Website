import { Component, OnInit } from '@angular/core';
import { Section2App } from './section2/section2.component';
import { Router } from '@angular/router';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { appSection5 } from './section5/section5.component';
import { Section6Component } from './section6/section6.component';
import { Section7Component } from './section7/section7.component';
import { Section8Component } from './section8/section8.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Section2App,
    Section3Component,
    Section4Component,
    appSection5,
    Section6Component,
    Section7Component,
    Section8Component,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  homeTitle: any;
  homeSubtitle: any;
  headerHero: any;
  count: number = 1;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.homeTitle = document.querySelector('.hero-title');
    this.homeSubtitle = document.querySelector('.hero-subtitle');
    this.headerHero = document.querySelector('.header-hero');
    this.homeTitle.textContent = 'Welcome To Suites';
    this.homeSubtitle.textContent = 'HOTEL & RESORT';
    this.headerHero.style.backgroundImage = `url('./assets/headerHeroImg/background-${this.count}.jpg')`;
    setInterval(() => {
      if (this.count <= 2) {
        this.count++;
      } else {
        this.count = 1;
      }
      switch (this.count) {
        case 1:
          this.homeTitle.textContent = 'Welcome To Suites';
          this.homeSubtitle.textContent = 'HOTEL & RESORT';
          break;
        case 2:
          this.homeTitle.textContent = 'Unique Experience';
          this.homeSubtitle.textContent = 'ENJOY WITH US';
          break;
        case 3:
          this.homeTitle.textContent = 'Relaxing Room';
          this.homeSubtitle.textContent = 'YOUR ROOM, YOUR STAY';
          break;
      }
      this.headerHero.style.backgroundImage = `url('./assets/headerHeroImg/background-${this.count}.jpg')`;
    }, 5000);
  }
  changeRight(): void {
    if (this.count <= 2) {
      this.count++;
    } else {
      this.count = 1;
    }
    switch (this.count) {
      case 1:
        this.homeTitle.textContent = 'Welcome To Suites';
        this.homeSubtitle.textContent = 'HOTEL & RESORT';
        break;
      case 2:
        this.homeTitle.textContent = 'Unique Experience';
        this.homeSubtitle.textContent = 'ENJOY WITH US';
        break;
      case 3:
        this.homeTitle.textContent = 'Relaxing Room';
        this.homeSubtitle.textContent = 'YOUR ROOM, YOUR STAY';
        break;
    }
    this.headerHero.style.backgroundImage = `url('./assets/headerHeroImg/background-${this.count}.jpg')`;
  }
  changeLeft(): void {
    if (this.count > 1) {
      this.count--;
    } else {
      this.count = 3;
    }
    switch (this.count) {
      case 1:
        this.homeTitle.textContent = 'Welcome To Suites';
        this.homeSubtitle.textContent = 'HOTEL & RESORT';
        break;
      case 2:
        this.homeTitle.textContent = 'Unique Experience';
        this.homeSubtitle.textContent = 'ENJOY WITH US';
        break;
      case 3:
        this.homeTitle.textContent = 'Relaxing Room';
        this.homeSubtitle.textContent = 'YOUR ROOM, YOUR STAY';
        break;
    }
    this.headerHero.style.backgroundImage = `url('./assets/headerHeroImg/background-${this.count}.jpg')`;
  }
}
