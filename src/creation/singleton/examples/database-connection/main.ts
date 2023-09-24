import { DatabaseConnection } from './database-singleton/database'

class DatabaseApp {
  constructor() {
    // First call
    const database_connection1 = DatabaseConnection.getInstance()
    database_connection1.printConnectionInfo()

    // Second call
    const DatabaseConnection2 = DatabaseConnection.getInstance()
    DatabaseConnection2.printConnectionInfo()
  }
}

new DatabaseApp()
