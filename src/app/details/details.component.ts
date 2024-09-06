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

  constructor(public http: HttpClient, public route: ActivatedRoute) {

  }

  characterName: string | null = null
  characterDetails: Character | null = null

  async ngOnInit() {
    this.characterName = this.route.snapshot.paramMap.get("name")
    console.log(this.characterName)
    if (this.characterName == null) this.characterName = "kenny"
    let x = await lastValueFrom(this.http.get<any>("https://spapi.dev/api/characters?search=" + this.characterName))
    this.characterDetails = new Character(x.data[0].name, x.data[0].age, x.data[0].occupation, x.data[0].grade, x.data[0].episodes.length)
  }
}
