import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  standalone: true,
  imports: [CommonModule, CardComponent],
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // Cette liste a été transférée dans le DataService
  characters: string[] = ["bebe", "butters", "clyde", "craig", "eric", "kenny", "kyle", "nichole", "stan", "tolkien", "wendy"];

  constructor() { }

  ngOnInit() {
  }


}
