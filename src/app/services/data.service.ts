import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  characters: string[] = ["bebe", "butters", "clyde", "craig", "eric", "kenny", "kyle", "nichole", "stan", "tolkien", "wendy"];

  constructor(public http: HttpClient) { }

  async getHttpCharacter(nom: String): Promise<Character> {
    let x = await lastValueFrom(this.http.get<any>("https://spapi.dev/api/characters?search=" + nom))
    return new Character(x.data[0].name, x.data[0].age, x.data[0].occupation, x.data[0].grade, x.data[0].episodes.length)
  }

}
