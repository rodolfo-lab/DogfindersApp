import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection
} from '@capacitor-community/sqlite';

import { Dog } from '../models/dog.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private sqlite: SQLiteConnection;
  private db: SQLiteDBConnection | null = null;

  private readonly DATABASE_NAME =
    environment.databaseName;

  private readonly TABLE_DOGS =
    environment.tableNameDogs;

  private readonly TABLE_USERS =
    'users';

  constructor() {
    this.sqlite = new SQLiteConnection(
      CapacitorSQLite
    );
  }

  async initializeDatabase(): Promise<boolean> {

    try {

      const platform =
        Capacitor.getPlatform();

      console.log(
        'Plataforma:',
        platform
      );

      if (platform === 'web') {

        console.warn(
          'SQLite desativado no navegador'
        );

        return true;
      }

      await this.sqlite
        .checkConnectionsConsistency();

      const isConnection =
        await this.sqlite.isConnection(
          this.DATABASE_NAME,
          false
        );

      if (
        isConnection.result
      ) {

        this.db =
          await this.sqlite.retrieveConnection(
            this.DATABASE_NAME,
            false
          );

      } else {

        this.db =
          await this.sqlite.createConnection(
            this.DATABASE_NAME,
            false,
            'no-encryption',
            1,
            false
          );
      }

      await this.db.open();

      await this.createTables();

      console.log(
        'Banco inicializado'
      );

      return true;

    } catch (error) {

      console.error(
        'Erro ao iniciar banco:',
        error
      );

      return false;
    }
  }

  private async createTables() {

    this.checkDatabase();

    await this.db!.execute(`
      CREATE TABLE IF NOT EXISTS ${this.TABLE_DOGS} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        image TEXT,
        latitude REAL NOT NULL,
        longitude REAL NOT NULL,
        timestamp DATETIME
        DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await this.db!.execute(`
      CREATE TABLE IF NOT EXISTS ${this.TABLE_USERS} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario TEXT NOT NULL,
        senha TEXT NOT NULL
      );
    `);
  }

  async addUser(
    usuario: string,
    senha: string
  ): Promise<number> {

    this.checkDatabase();

    const result =
      await this.db!.run(
        `
        INSERT INTO
        ${this.TABLE_USERS}
        (
          usuario,
          senha
        )
        VALUES (?, ?)
        `,
        [
          usuario,
          senha
        ]
      );

    return (
      result.changes?.lastId
      ?? 0
    );
  }

  async addMissingDog(
    description: string,
    title: string,
    image: string,
    latitude: number,
    longitude: number
  ): Promise<number> {

    this.checkDatabase();

    const result =
      await this.db!.run(
        `
        INSERT INTO
        ${this.TABLE_DOGS}
        (
          description,
          title,
          image,
          latitude,
          longitude
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
          description,
          title,
          image,
          latitude,
          longitude
        ]
      );

    return (
      result.changes?.lastId
      ?? 0
    );
  }

  async getDogs(): Promise<Dog[]> {

    this.checkDatabase();

    const result =
      await this.db!.query(`
        SELECT *
        FROM ${this.TABLE_DOGS}
        ORDER BY timestamp DESC
      `);

    return (
      result.values ?? []
    ) as Dog[];
  }

  async getDogById(
    id: number
  ): Promise<Dog | null> {

    this.checkDatabase();

    const result =
      await this.db!.query(
        `
        SELECT *
        FROM ${this.TABLE_DOGS}
        WHERE id = ?
        `,
        [id]
      );

    return (
      result.values?.[0] as Dog
    ) ?? null;
  }

  async updateDog(
    id: number,
    data: Partial<Dog>
  ): Promise<boolean> {

    this.checkDatabase();

    const result =
      await this.db!.run(
        `
        UPDATE
        ${this.TABLE_DOGS}
        SET
          title = ?,
          description = ?,
          image = ?,
          latitude = ?,
          longitude = ?
        WHERE id = ?
        `,
        [
          data.title ?? '',
          data.description ?? '',
          data.image ?? '',
          data.location!.latitude ?? 0,
          data.location!.longitude ?? 0,
          id
        ]
      );

    return (
      result.changes?.changes
      ?? 0
    ) > 0;
  }

  async deleteDog(
    id: number
  ): Promise<boolean> {

    this.checkDatabase();

    const result =
      await this.db!.run(
        `
        DELETE FROM
        ${this.TABLE_DOGS}
        WHERE id = ?
        `,
        [id]
      );

    return (
      result.changes?.changes
      ?? 0
    ) > 0;
  }

  async closeDatabase():
    Promise<void> {

    if (!this.db) {
      return;
    }

    await this.db.close();

    await this.sqlite
      .closeConnection(
        this.DATABASE_NAME,
        false
      );

    this.db = null;
  }

  isInitialized():
    boolean {

    return this.db !== null;
  }

  private checkDatabase():
    void {

    if (!this.db) {

      throw new Error(
        'Banco não inicializado'
      );
    }
  }
}