import { Component, OnInit } from '@angular/core';
import { ViajeService } from '../service/viaje.service';
import { Viaje } from '../model/Viaje';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {

  constructor(private viajeService: ViajeService) { }
  
  private viajes: Viaje[];
  
  ngOnInit() {
    this.viajes = [];
    this.viajeService.getViajes("a").subscribe(viajes => {
      this.viajes = viajes;
    });
  }

}
