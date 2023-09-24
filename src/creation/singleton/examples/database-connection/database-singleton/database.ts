export class DatabaseConnection {
  private static db_connection: DatabaseConnection

  private constructor() {}

  static getInstance(): DatabaseConnection {
    if (DatabaseConnection.db_connection == null) {
      console.log('Singleton initialized')
      DatabaseConnection.db_connection = new DatabaseConnection()
    }
    return DatabaseConnection.db_connection
  }

  printConnectionInfo() {
    console.log('This is connection info')
  }
}
