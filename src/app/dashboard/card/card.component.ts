import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/skill';
import { SkillService } from 'src/app/skill.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  loading: boolean;

  @Input() card: Skill;
  constructor(private skillService: SkillService) { }

  ngOnInit() {
  }

  onLike(card: Skill){
    this.loading = true;
    const likes = {...card, likes: card.likes + 1};
    this.skillService.updateSkill(likes).subscribe(skill => {
      this.card = skill;
      this.loading = false;
    });
    // TODO: incrementar o like, salvar via rest
  }

  onShare(){
    window.open('https://www.linkedin.com/in/rmteodoro', '_blank');
    // TODO: abrir o link do seu linkedin
  }

  color(card:any) {
    if (card.likes >= 5 && card.likes <= 10) {
      return 'primary';
    } else if (card.likes > 10) {
      return 'accent';
    }
  }

}
