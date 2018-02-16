import { Component, OnInit } from '@angular/core';
import { ViajeService } from '../service/viaje.service';
import { Viaje } from '../model/Viaje';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private viajeService: ViajeService) { }

  private viajes: Viaje[];

  ngOnInit() {
    this.viajes = [];
    this.viajeService.getViajes("a").subscribe(viajes => {
      this.viajes = viajes;
    });
  }

  search(v:Viaje){
    this.router.navigate(['viajes', v.id]);
  }

}
