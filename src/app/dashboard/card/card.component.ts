import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  loading: boolean;

  @Input() card;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onLike(card: any){
    this.loading = true;
    const likes = {...card, likes: card.likes + 1};
    this.httpClient.put(`/api/skills/${card.id}`, likes).subscribe((ret) => {
      this.card = ret;
      this.loading = false;
    });
    // TODO: incrementar o like, salvar via rest
  }

  onShare(card: any){
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
