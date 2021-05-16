import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from './skill';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private skillsUrl = '/api/skills';

  constructor(private httpClient: HttpClient) { }

  getSkills() {
    return this.httpClient.get<Skill[]>(this.skillsUrl, httpOptions);
  }

  updateSkill(card: Skill) {
    const url = `${this.skillsUrl}/${card.id}`;
    return this.httpClient.put<Skill>(url, card, httpOptions);
  }
}
