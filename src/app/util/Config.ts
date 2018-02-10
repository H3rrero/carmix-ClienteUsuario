export class Config {

    private static PROTOCOL = 'http';
    private static SERVER = 'localhost';
    // private static SERVER = '192.168.56.101';
    // private static SERVER = '192.168.1.96';
    private static PORT = '8080';

    private static API_URL = Config.PROTOCOL + "://" + Config.SERVER + ":" + Config.PORT;

    //VIAJE Rest service URLs
    private static VIAJE = Config.API_URL + "/viaje"; //Base url

    public static findViajes(){return Config.VIAJE + "/";}
    public static findViaje(id:number){return Config.VIAJE + "/" + id;}
}