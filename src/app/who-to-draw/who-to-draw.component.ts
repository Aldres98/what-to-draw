import { Component, OnInit } from '@angular/core';
import { RandomCharacterService } from '../random-character.service';

@Component({
  selector: 'app-who-to-draw',
  templateUrl: './who-to-draw.component.html',
  styleUrls: ['./who-to-draw.component.css']
})
export class WhoToDrawComponent implements OnInit {

  selectedCharacter: string = '...';

  constructor(private randomCharacterService: RandomCharacterService) { }

  getCurrentHero(){
    this.selectedCharacter = this.randomCharacterService.getRandomCharacter();
  }

  ngOnInit() {
  }

}
