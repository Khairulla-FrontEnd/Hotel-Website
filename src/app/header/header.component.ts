import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations:[
    trigger('openClose',[
      state('open',style({
        backgroundColor:""
      })),
      state('closed',style({
        backgroundColor:"white"
      })),
      transition('open => closed',[animate('0.5s')]),
      transition('closed => open',[animate('0.5s')])
    ])
  ]
})
export class HeaderComponent implements OnInit{
  isOpen:boolean = true;
  active:number = 0;
  header:any;
  handleClick(index:number):void{
    this.active = index;
  }
  selectorLinks2 = [
    "America",
    "Europe",
    "Asia",
    "Africa",
  ];
  selectorLinks = [
    "Standart Room",
    "Family Room",
    "Single Room",
    "Rooms"
  ];
  showThings(a:HTMLElement,b:HTMLElement){
    a.style.display = "flex";
    b.style.display = "flex";
  }
  headerLinks = [
    {
      link:"home",
      title:"HOME"
    },
    {
      link:"rooms",
      title:"ROOMS",
    },
    {
      link:"events",
      title:"EVENTS",
    },
    {
      link:"about",
      title:"ABOUT",
    },
    {
      link:"contact",
      title:"CONTACT",
    },
  ];
  ngOnInit(): void {
    this.header = document.querySelector("header");
    window.addEventListener('scroll',() => {
      const section2 = document.querySelector(".section-2");
      const sectRect:any = section2?.getBoundingClientRect();
      if(window.innerHeight >= sectRect.y + 150){
        this.isOpen = false;
        this.header.style.paddingBlock = '20px';
      }else{
        this.isOpen = true;
        this.header.style.paddingBlock = '40px';
      }
    });
  }
}
