import {User} from "./User";
export class Viaje {
  id: number;
  origen: string;
  destino: string;
  descripcion: string;
  plazas: number;
  precio: number;
  creador: number;
  usuarios: User[];
  lista:string;
}
