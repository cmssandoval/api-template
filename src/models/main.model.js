import pool from '../database/connection.js';

class MainModel {
    static async getAll() {
        const query = 'SELECT * FROM table_name';
        const [rows] = await pool.query(query);
        return rows;
    }
    //...
}

export default MainModel;
