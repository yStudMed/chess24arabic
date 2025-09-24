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
    INSERT INTO tournaments (id, slug, start_date, end_date, api_provider)
    VALUES
    ('LyCwzCYs', 'world-junior-rapid-chess-championship-2025--rapid-girl', '${new Date(1758657600000).toISOString()}', '${new Date(1758820800000).toISOString()}', 'lichess'),
    ('huKL6m7g', 'world-junior-rapid-chess-championship-2025--rapid-open', '${new Date(1758657600000).toISOString()}', '${new Date(1758820800000).toISOString()}', 'lichess'),
    ('Ku0Td4fd', 'fide-world-cadet-chess-championships-2025--open-u8', '${new Date(1758276900000).toISOString()}', '${new Date(1759212900000).toISOString()}', 'lichess'),
    ('17699', '2025-leyendas-y-prodigios', '${new Date(1758099600000).toISOString()}', '${new Date(1758837600000).toISOString()}', 'chess.com'),
    ('13229', '2025-fide-grand-swiss', '${new Date(1756954800000).toISOString()}', '${new Date(1757980500000).toISOString()}', 'chess.com')
    ON CONFLICT (id) DO UPDATE
    SET
    id = EXCLUDED.id,
    slug = EXCLUDED.slug,
    start_date = EXCLUDED.start_date,
    end_date = EXCLUDED.end_date,
    api_provider = EXCLUDED.api_provider
    ;
`).then(() => {
    console.log("Tournaments Insertion Done");
}).catch((err) => {
    console.error(err);
}).finally(() => {
    pool.end();
});