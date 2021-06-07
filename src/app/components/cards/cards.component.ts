import { Component, OnInit } from '@angular/core';
//import {CardItem} from './card-item/card-item.component';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cardItem ={
name:'Yusuf Ç',
phone:'phone',
adress:'adress',
email:'email',
title:'title'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
