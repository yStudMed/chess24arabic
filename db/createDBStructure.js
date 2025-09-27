import pg from "pg";
import '../envConfig.js';
import { dbPoolConfigOptions } from "../lib/dbPoolConfigOptions.js"
//

const pool = new pg.Pool(dbPoolConfigOptions);

//
pool.query(`
    CREATE TABLE players (
        fide_id INTEGER UNIQUE NOT NULL,
        image_url VARCHAR(1024) NOT NULL
    );
    CREATE TABLE tournaments (
        id VARCHAR(12) UNIQUE NOT NULL,
        name VARCHAR(512) NOT NULL,
        start_date TIMESTAMPTZ NOT NULL,
        end_date TIMESTAMPTZ NOT NULL,
        image_url VARCHAR(1024) NOT NULL,
        slug VARCHAR(512),
        CHECK (start_date < end_date)
    );
`).then(() => {
    console.log("Tables Creation Done");
}).catch((err) => {
    console.error(err);
}).finally(() => {
    pool.end();
});