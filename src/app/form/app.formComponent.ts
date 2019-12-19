import { Component } from '@angular/core';
import { SearchWay } from './search';

@Component({
  selector: 'search-form',
  templateUrl: './form.html',
  styleUrls: ['./app.formComponent.css']
})
export class formComponent {

  transportTypes = ['Выбрать','На автобусе', 'На метро',
            'Пешком', 'На машине'];

  wayTypes = ['Выбрать','Активный', 'По историческим местам',
            'По достопримечатльностям','Велосипедная прогулка',
            'Гастрономический гид', 'Культурный', 'По святым местам'];


  model = new SearchWay(0,0,"",this.transportTypes,this.wayTypes,"","");
}
