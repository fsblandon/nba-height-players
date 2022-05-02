import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { GetPlayersService } from 'src/app/services/get-players.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  //Ouput
  @Output() searchPlayers = new EventEmitter<Player[]>();

  //attributes
  heightSearched: string = '';
  players: Player[] = [];

  constructor(
    private getPlayerService: GetPlayersService
  ) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  // get list of players call service
  getPlayers(): any {
    this.getPlayerService.getPlayers().subscribe(
      (data: any) => {
        this.players = data.values;
      }
    );
  }

  getPlayerSearched(): Player[] {
    // algoritm to search pairs
    const playersSearched: Player[] = [];
    const heightsSeen1 = new Set();
    for (let index = 0; index < this.players.length; index++) {//O(n)

      const missingHeight: string = (parseInt(this.heightSearched) - parseInt(this.players[index].h_in)).toString();
      const player = this.players[index];
      if(heightsSeen1.has(missingHeight)) {
        playersSearched.push(player);//O(1)
      }
      heightsSeen1.add(this.players[index].h_in);//O(1)
    }

    const heightsSeen2 = new Set();
    for (let index = this.players.length-1; index > 0; index--) {//O(n)

      const missingHeight: string = (parseInt(this.heightSearched) - parseInt(this.players[index].h_in)).toString();
      const player = this.players[index];
      if (heightsSeen2.has(missingHeight)) {
        playersSearched.push(player);//O(1)
      }
      heightsSeen2.add(this.players[index].h_in);//O(1)
    }
    //Result Complexity O(n)*O(1) + O(n)*O(1) = O(2n)//

    this.searchPlayers.emit(playersSearched);
    return playersSearched;
  }

}
