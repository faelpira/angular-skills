import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {

  loading = true;
  opacity = 1;
  transition: string;
  cards: Array<any>;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills() {
    this.skillService.getSkills().subscribe(skills => {
      this.opacity = 0
      this.transition = 'opacity 1s';
      this.cards = skills;
      this.loading = false;
    })
  }
}
