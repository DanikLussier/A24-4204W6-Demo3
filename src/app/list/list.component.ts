import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  standalone: true,
  imports: [CommonModule, CardComponent],
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters: string[] = []

  constructor(public dataService: DataService) { }

  async ngOnInit() {
    this.characters = await this.dataService.characters
  }


}
