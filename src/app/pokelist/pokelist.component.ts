import { Component, inject } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.scss'
})
export class PokelistComponent {

  private pokeListUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000@offset=0';

  public http = inject(HttpClient);

  public data: Array<any> = [];

  ngOnInit() {
    this.http.get(this.pokeListUrl)
      .subscribe({
        next: (data: any) => {
          console.log(data.results);
          this.data = data.results;
        }
      })
  };
}

