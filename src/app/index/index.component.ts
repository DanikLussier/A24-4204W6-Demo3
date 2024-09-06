import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  characterName: string = "";
  characters: string[] = []

  constructor(public dataService: DataService) { }

  async ngOnInit() {
    this.characters = await this.dataService.characters
  }

}
