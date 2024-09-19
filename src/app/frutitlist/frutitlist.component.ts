import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SingelfruitComponent } from "./singelfruit/singelfruit.component";
import { FruitListDateService } from '../fruit-list-date.service';

@Component({
  selector: 'app-frutitlist',
  standalone: true,
  imports: [CommonModule, SingelfruitComponent],
  templateUrl: './frutitlist.component.html',
  styleUrl: './frutitlist.component.scss'
})
export class FrutitlistComponent {

  fruitlistdate = inject(FruitListDateService)

  howItWorks = "In dieser Liste finden Sie eine Auswahl an Obstsorten. Klicken Sie auf die jeweilige Obstsorte, um mehr Informationen zu erhalten. Sie können auch eine Bewertung abgeben, wenn Sie möchten.";

  fontColorGood = 'green'
  fontColorBad = 'red'

  addComment(comment: string, index: number) {
   this.fruitlistdate.fruitlist[index].reviews.push({
      name: "Schlangenwürger",
      text: comment,
   })    
  }
}
