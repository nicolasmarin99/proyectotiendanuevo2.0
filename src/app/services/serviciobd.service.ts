import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})

export class ServiciobdService {

  public database!: SQLiteObject;

  //ariable creacion de tablas
  tablaRol:string = "CREATE TABLE IF NOT EXISTS Rol ( id_rol INTEGER PRIMARY KEY, nombre_rol TEXT NOT NULL);";

  tablaUsuarios:string ="CREATE TABLE IF NOT EXISTS Usuario ( id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,nombre_usuario TEXT NOT NULL, email TEXT NOT NULL,contraseña TEXT NOT NULL, id_rol INTEGER,FOREIGN KEY (id_rol) REFERENCES Rol(id_rol));";

  tablaDirecciones:string = "CREATE TABLE IF NOT EXISTS Direccion (id_direccion INTEGER PRIMARY KEY AUTOINCREMENT,id_usuario INTEGER, region TEXT NOT NULL,ciudad TEXT NOT NULL,calle TEXT NOT NULL,tipo_domicilio TEXT NOT NULL, numero_domicilio TEXT NOT NULL,FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario));";

  tablaProductos:string = "CREATE TABLE IF NOT EXISTS Producto (id_producto INTEGER PRIMARY KEY AUTOINCREMENT,nombre_producto TEXT NOT NULL, marca TEXT NOT NULL,talla TEXT NOT NULL,precio REAL NOT NULL, imagen_producto TEXT);";

  tablaCompras:string ="CREATE TABLE IF NOT EXISTS Compra (id_compra INTEGER PRIMARY KEY AUTOINCREMENT,id_usuario INTEGER,fecha_compra TEXT NOT NULL,precio_total REAL NOT NULL,FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario));";

  tablaDetallesCompra:string ="CREATE TABLE IF NOT EXISTS DetalleCompra (id_detalle INTEGER PRIMARY KEY AUTOINCREMENT,id_compra INTEGER,id_producto INTEGER,cantidad INTEGER NOT NULL,talla TEXT NOT NULL,precio_unitario REAL NOT NULL,FOREIGN KEY (id_compra) REFERENCES Compra(id_compra), FOREIGN KEY (id_producto) REFERENCES Producto(id_producto));";
  
  //variables para guardar los datos de las consultas en las tablas
  listadoUsuarios = new BehaviorSubject([]);

  //variable para el status de la Base de datos
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform,private alertController:AlertController) {
    this.createBD()
  }


  async presentAlert(titulo: string, msj:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  //metodos para manipular los observables
  fetchUsuarios(): Observable<Usuarios[]>{
    return this.listadoUsuarios.asObservable();
  }

  dbState(){
    return this.isDBReady.asObservable();
  }

  createBD(){
    this.platform.ready().then(()=>{
      this.sqlite.create({
        name:'shoesapp',
        location: 'default'
      }).then((db:SQLiteObject)=>{
        this.database=db;
        this.crearTablas();
      }).catch(e=>{
        this.presentAlert('base de datos','error crear base de datos: '+JSON.stringify(e));
      })
    })
  }

  async crearTablas(){
    try{
      await this.database.executeSql(this.tablaRol, []);
    await this.database.executeSql(this.tablaUsuarios, []);
    await this.database.executeSql(this.tablaDirecciones, []);
    await this.database.executeSql(this.tablaProductos, []);
    await this.database.executeSql(this.tablaCompras, []);
    await this.database.executeSql(this.tablaDetallesCompra, []);

    this.seleccionarUsuario();

    this.isDBReady.next(true);
    }catch(e){
      this.presentAlert('Creación de Tablas', 'Error en crear las tablas: ' + JSON.stringify(e));
    }
  }

  async registrarUsuario(nombre_usuario: string, email: string, contrasena: string, region: string, ciudad: string, calle: string, tipo_domicilio: string, numero_domicilio: string) {
    try {
      // Primero insertamos en la tabla Usuario
      let queryUsuario = `INSERT INTO Usuario (nombre_usuario, email, contraseña, id_rol) VALUES (?, ?, ?, ?)`;
      let rolDefault = 2; // Puedes cambiar esto por el id_rol que corresponda
      let resUsuario = await this.database.executeSql(queryUsuario, [nombre_usuario, email, contrasena, rolDefault]);
      
      // El id del usuario insertado lo obtenemos de resUsuario.insertId
      let idUsuario = resUsuario.insertId;
  
      // Luego insertamos en la tabla Direccion, usando el id del usuario registrado
      let queryDireccion = `INSERT INTO Direccion (id_usuario, region, ciudad, calle, tipo_domicilio, numero_domicilio) VALUES (?, ?, ?, ?, ?, ?)`;
      await this.database.executeSql(queryDireccion, [idUsuario, region, ciudad, calle, tipo_domicilio, numero_domicilio]);
  
      console.log('Usuario y dirección registrados exitosamente.');
    } catch (error) {
      console.error('Error al registrar usuario y dirección:', error);
      throw new Error('Error en el registro');
    }
  }

  seleccionarUsuario(): Promise<void> {
    const id_usuario = localStorage.getItem('id_usuario'); // Obtener el id del usuario logueado
  
    // Asegurarte de que siempre se retorna una promesa
    return new Promise((resolve, reject) => {
      if (id_usuario) {
        this.database.executeSql("SELECT id_usuario, nombre_usuario, email FROM Usuario WHERE id_usuario = ?", [id_usuario])
          .then(res => {
            let items: Usuarios[] = [];
            if (res.rows.length > 0) {
              items.push({
                id_usuario: res.rows.item(0).id_usuario,
                nombre_usuario: res.rows.item(0).nombre_usuario,
                email: res.rows.item(0).email,
              });
            }
            console.log("Usuario logueado obtenido:", items[0]);
            this.listadoUsuarios.next(items as any);
            resolve(); // Resuelve la promesa exitosamente
          })
          .catch(e => {
            console.error('Error al seleccionar usuario logueado: ', JSON.stringify(e));
            reject(e); // Rechaza la promesa si hay un error
          });
      } else {
        console.error('No se encontró el id_usuario del usuario logueado.');
        reject('No se encontró el id_usuario del usuario logueado.'); // Rechaza si no hay id_usuario
      }
    });
  }

   // Método para ejecutar consultas SQL
  async executeQuery(query: string, params: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
      this.database.executeSql(query, params)
        .then((resultSet) => resolve(resultSet))
        .catch((error) => reject(error));
    });
  }

  public getDatabase(): Promise<SQLiteObject> {
    return Promise.resolve(this.database);
  }
}


