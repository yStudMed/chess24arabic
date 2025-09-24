import pg from "pg";
//
const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    user: "postgres",
    database: "chess24",
    password: 'qqa'
});

//
pool.query(`
    CREATE TABLE players (
        fide_id INTEGER UNIQUE NOT NULL,
        image_url VARCHAR(1024) NOT NULL
    );
    CREATE TABLE tournaments (
        id VARCHAR(12) UNIQUE NOT NULL,
        slug VARCHAR(1024) NOT NULL,
        start_date TIMESTAMPTZ NOT NULL,
        end_date TIMESTAMPTZ NOT NULL,
        api_provider VARCHAR(12) NOT NULL
    );
`).then(() => {
    console.log("Tables Creation Done");
}).catch((err) => {
    console.error(err);
}).finally(() => {
    pool.end();
});