import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServiciobdService {
  public database!: SQLiteObject;

  constructor(private sqlite: SQLite, private platform: Platform) {
    this.platform.ready().then(() => {
      this.createDatabase();
    });
  }

  // Crear la base de datos SQLite
  private createDatabase() {
    this.sqlite.create({
      name: 'app_database.db',
      location: 'default' // Esto hace que la base de datos sea accesible
    })
    .then((db: SQLiteObject) => {
      this.database = db;
      this.createTables();  // Llamar al método para crear tablas
    })
    .catch(e => console.error('Error al crear la base de datos', e));
  }

  // Crear tablas en SQLite
  private createTables() {
    // Crear tabla de roles
    this.database.executeSql(`
      CREATE TABLE IF NOT EXISTS Rol (
        id_rol INTEGER PRIMARY KEY,
        nombre_rol TEXT NOT NULL
      );`, [])
      .then(() => {
        console.log('Tabla Rol creada');
        // Insertar roles con IDs específicos
        return this.database.executeSql('INSERT INTO Rol (id_rol, nombre_rol) VALUES (?, ?)', [1, 'administrador']);
      })
      .then(() => {
        return this.database.executeSql('INSERT INTO Rol (id_rol, nombre_rol) VALUES (?, ?)', [2, 'usuario']);
      })
      .catch(e => console.error('Error al crear tabla Rol o insertar roles', e));

    // Crear tabla de usuarios
    this.database.executeSql(`
      CREATE TABLE IF NOT EXISTS Usuario (
        id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre_usuario TEXT NOT NULL,
        email TEXT NOT NULL,
        contraseña TEXT NOT NULL,
        id_rol INTEGER,
        FOREIGN KEY (id_rol) REFERENCES Rol(id_rol)
      );`, [])
      .then(() => console.log('Tabla Usuario creada'))
      .catch(e => console.error('Error al crear tabla Usuario', e));

    // Crear tabla de direcciones
    this.database.executeSql(`
      CREATE TABLE IF NOT EXISTS Direccion (
        id_direccion INTEGER PRIMARY KEY AUTOINCREMENT,
        id_usuario INTEGER,
        region TEXT NOT NULL,
        ciudad TEXT NOT NULL,
        calle TEXT NOT NULL,
        tipo_domicilio TEXT NOT NULL,
        numero_domicilio TEXT NOT NULL,
        FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
      );`, [])
      .then(() => console.log('Tabla Dirección creada'))
      .catch(e => console.error('Error al crear tabla Dirección', e));

    // Crear tabla de productos
    this.database.executeSql(`
      CREATE TABLE IF NOT EXISTS Producto (
        id_producto INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre_producto TEXT NOT NULL,
        marca TEXT NOT NULL,
        talla TEXT NOT NULL,
        precio REAL NOT NULL,
        imagen_producto TEXT
      );`, [])
      .then(() => console.log('Tabla Producto creada'))
      .catch(e => console.error('Error al crear tabla Producto', e));

    // Crear tabla de compras
    this.database.executeSql(`
      CREATE TABLE IF NOT EXISTS Compra (
        id_compra INTEGER PRIMARY KEY AUTOINCREMENT,
        id_usuario INTEGER,
        fecha_compra TEXT NOT NULL,
        precio_total REAL NOT NULL,
        FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
      );`, [])
      .then(() => console.log('Tabla Compra creada'))
      .catch(e => console.error('Error al crear tabla Compra', e));

    // Crear tabla de detalles de compra
    this.database.executeSql(`
      CREATE TABLE IF NOT EXISTS DetalleCompra (
        id_detalle INTEGER PRIMARY KEY AUTOINCREMENT,
        id_compra INTEGER,
        id_producto INTEGER,
        cantidad INTEGER NOT NULL,
        talla TEXT NOT NULL,
        precio_unitario REAL NOT NULL,
        FOREIGN KEY (id_compra) REFERENCES Compra(id_compra),
        FOREIGN KEY (id_producto) REFERENCES Producto(id_producto)
      );`, [])
      .then(() => console.log('Tabla DetalleCompra creada'))
      .catch(e => console.error('Error al crear tabla DetalleCompra', e));
  }

  // Método para ejecutar cualquier consulta SQL
  public executeQuery(query: string, params: any[] = []) {
    return this.database.executeSql(query, params);
  }

  // Ejemplo de inserción de un rol
  public insertarRol(nombre_rol: string) {
    return this.database.executeSql('INSERT INTO Rol (nombre_rol) VALUES (?)', [nombre_rol])
      .then(() => console.log('Rol insertado'))
      .catch(e => console.error('Error al insertar rol', e));
  }


  // Otras funciones para manejar usuarios, productos, etc., pueden ser añadidas aquí

  public registrarUsuario(nombre_usuario: string, email: string, contraseña: string, region: string, ciudad: string, calle: string, tipo_domicilio: string, numero_domicilio: string) {
    return new Promise((resolve, reject) => {
      const id_rol = 2; // Asignar ID de rol 2 para usuarios
  
      // Insertar el nuevo usuario
      this.database.executeSql('INSERT INTO Usuario (nombre_usuario, email, contraseña, id_rol) VALUES (?, ?, ?, ?)', [nombre_usuario, email, contraseña, id_rol])
        .then((res) => {
          // Obtener el id_usuario del usuario recién insertado
          const id_usuario = res.insertId;
  
          // Insertar dirección
          return this.database.executeSql('INSERT INTO Direccion (id_usuario, region, ciudad, calle, tipo_domicilio, numero_domicilio) VALUES (?, ?, ?, ?, ?, ?)', [id_usuario, region, ciudad, calle, tipo_domicilio, numero_domicilio]);
        })
        .then(() => {
          console.log('Usuario y dirección registrados exitosamente');
          resolve(true); // Resolviendo la promesa
        })
        .catch(e => {
          console.error('Error al registrar usuario o dirección', e);
          reject(e); // Rechazando la promesa en caso de error
        });
    });
  }
}