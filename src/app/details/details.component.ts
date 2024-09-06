import { DataService } from './../services/data.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Character } from '../models/character';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  constructor(public http: HttpClient, public route: ActivatedRoute, public dataService: DataService) { }

  characterName: string | null = null
  characterDetails: Character | null = null

  async ngOnInit() {
    this.characterName = this.route.snapshot.paramMap.get("name")
    if (this.characterName == null) this.characterName = "kenny"
    this.characterDetails = await this.dataService.getHttpCharacter(this.characterName)
  }
}
