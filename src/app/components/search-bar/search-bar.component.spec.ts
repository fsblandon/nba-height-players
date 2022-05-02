import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetPlayersService } from 'src/app/services/get-players.service';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [
        GetPlayersService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a length of player as a result', () => {
    component.heightSearched = '164';
    component.getPlayerSearched();
    component.players = [
      {"first_name":"Alex","h_in":"77","h_meters":"1.96","last_name":"Acker"},
      {"first_name":"Hassan","h_in":"76","h_meters":"1.93","last_name":"Adams"},
      {"first_name":"Arron","h_in":"77","h_meters":"1.96","last_name":"Afflalo"},
      {"first_name":"Maurice","h_in":"77","h_meters":"1.96","last_name":"Ager"},
      {"first_name":"Alexis","h_in":"84","h_meters":"2.13","last_name":"Ajinca"},
      {"first_name":"LaMarcus","h_in":"83","h_meters":"2.11","last_name":"Aldridge"},
      {"first_name":"Joe","h_in":"80","h_meters":"2.03","last_name":"Alexander"},
      {"first_name":"Malik","h_in":"82","h_meters":"2.08","last_name":"Allen"},
      {"first_name":"Ray","h_in":"77","h_meters":"1.96","last_name":"Allen"},
      {"first_name":"Tony","h_in":"76","h_meters":"1.93","last_name":"Allen"}
    ];
    expect(component.getPlayerSearched().length).toEqual(2);
  });
});
