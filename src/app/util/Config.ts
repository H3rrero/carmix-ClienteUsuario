export class Config {

    private static PROTOCOL = 'https';
    private static SERVER = 'localhost';
    // private static SERVER = '192.168.56.101';
    // private static SERVER = '192.168.1.96';
    private static PORT = '8080';

    private static API_URL = Config.PROTOCOL + "://" + Config.SERVER + ":" + Config.PORT;


    //LOGIN
    private static USER = Config.API_URL + "/user"; //Base url
    public static logIn(){return Config.USER + "/logIn"}
    public static registerUser() {return Config.USER + "/"}

    //USUARIO
    public static getViajesUsuario(id: string) {return Config.USER + "/" +id +"/viajes"}


    //VIAJE Rest service URLs
    private static VIAJE = Config.API_URL + "/viajes"; //Base url

    public static findViajes(){return Config.VIAJE + "/";}
    public static findViaje(id:number){return Config.VIAJE + "/" + id;}
    public static getProvincias() {return Config.VIAJE + "/destinos"}
    public static crearViaje() { return Config.VIAJE + "/"}
    public static actualizarViaje() {return Config.VIAJE + "/"}
    public static deleteViaje(id:number) {return Config.VIAJE + "/" +id}

    //SPOTIFY
    private static SPOTIFY = Config.API_URL + "/spotify"; //Base url
    public static getCategrias() {return Config.SPOTIFY + "/categorias"}

}
