import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class GetPlayersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPlayers(): Observable<Player[]> {
    return this.httpClient.get<Player[]>('https://mach-eight.uc.r.appspot.com');
  }
}
