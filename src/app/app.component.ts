import { Component } from '@angular/core';
import { PlayerElement } from './models/player-element.model';
import { Player } from './models/player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displayedColumns: string[] = ['player1', 'player2'];
  dataSource: PlayerElement[] = [];
  title = 'nba-heights-players';
  players: Player[] = [];

  searchPlayer(players: any) {
    this.players = players;
    this.dataSource = [];
    if(this.players.length > 0) {
      for (let index = 0; index < this.players.length; index = index + 2) {
        const player1 = this.players[index];
        const player2 = this.players[index+1];
        this.dataSource.push({  player1: player1, player2: player2 });
      }
    }
  }
}
