import pg from "pg";
import '../envConfig.js';
import { dbPoolConfigOptions } from "../lib/dbPoolConfigOptions.js"
//
const pool = new pg.Pool(dbPoolConfigOptions);

//
pool.query(`
    INSERT INTO tournaments (id, name, start_date, end_date, image_url, slug)
    VALUES
    ('LyCwzCYs', 'world junior rapid chess championship 2025 rapid girl', '${new Date(1758657600000).toISOString()}', '${new Date(1758820800000).toISOString()}', 'https://image.lichess1.org/display?fmt=webp&h=400&op=thumbnail&path=relay:LyCwzCYs:ZZA7E1B8.webp&w=800&sig=1fe900376f7d3751d9f5e2fcbdbe83729945787e', NULL),
    ('huKL6m7g', 'world junior rapid chess championship 2025 rapid open', '${new Date(1758657600000).toISOString()}', '${new Date(1758820800000).toISOString()}', 'https://image.lichess1.org/display?fmt=webp&h=400&op=thumbnail&path=relay:huKL6m7g:o96J5ZFP.webp&w=800&sig=b6ac872e65473297edde99902e52e7bdfd687127', NULL),
    ('Ku0Td4fd', 'fide world cadet chess championships 2025 open u8', '${new Date(1758276900000).toISOString()}', '${new Date(1759212900000).toISOString()}', 'https://image.lichess1.org/display?fmt=webp&h=400&op=thumbnail&path=relay:Ku0Td4fd:GyXwXN0h.webp&w=800&sig=5448d3516e30202a008a84b93858b9d3da845526', NULL),
    ('17699', '2025 leyendas y prodigios', '${new Date(1758099600000).toISOString()}', '${new Date(1758837600000).toISOString()}', 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phput6pg5h05qcg25FWuJw.png', '2025-leyendas-y-prodigios'),
    ('13229', '2025 fide grand swiss', '${new Date(1756954800000).toISOString()}', '${new Date(1757980500000).toISOString()}', 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/Colin_McGourty/phpjus3hb6as65827OAMgw.png', '2025-fide-grand-swiss')
    ;
`).then(() => {
    console.log("Tournaments Insertion Done");
}).catch((err) => {
    console.error(err);
}).finally(() => {
    pool.end();
});