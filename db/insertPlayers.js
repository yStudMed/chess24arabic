import pg from "pg";
import '../envConfig.js';
import { dbPoolConfigOptions } from "../lib/dbPoolConfigOptions.js"
//
const pool = new pg.Pool(dbPoolConfigOptions);

//
pool.query(`
    INSERT INTO players (fide_id, image_url)
    VALUES 
    (1503014, 'https://images.chesscomfiles.com/uploads/v1/master_player/8809ca8a-56ab-11ed-8e7e-1d2468352cab.a245d0f7.160x160o.959255fc5f71@2x.jpeg'),
    (2016192, 'https://images.chesscomfiles.com/uploads/v1/master_player/64a55aac-4da8-11ed-af11-c5008940fa28.91821856.160x160o.f4cd7326b732@2x.png'),
    (2020009, 'https://images.chesscomfiles.com/uploads/v1/master_player/c66cb17a-c005-11e8-886b-692f3468f8e7.b4d2d0e5.160x160o.a7fdc9487714@2x.jpg'),
    (25059530, 'https://images.chesscomfiles.com/uploads/v1/master_player/6e5ab444-e3e2-11ee-8e5b-2f5b853cca7a.b4d655bc.160x160o.e7b48666fd9b@2x.jpg'),
    (35009192, 'https://images.chesscomfiles.com/uploads/v1/master_player/2c5ae412-93e8-11eb-b363-812424cd84fb.21f56747.160x160o.49d963914822@2x.jpg'),
    (46616543, 'https://images.chesscomfiles.com/uploads/v1/master_player/b95de84c-a78e-11ef-90e0-d7ce4fab8385.e40db409.160x160o.dbe7ea2fcff8@2x.png'),
    (5202213, 'https://images.chesscomfiles.com/uploads/v1/master_player/d1da994a-c00b-11e8-ae3d-67e3121970db.484f4dd9.160x160o.d616431c4933@2x.png'),
    (12573981, 'https://images.chesscomfiles.com/uploads/v1/master_player/bc4aeece-e32b-11ee-9446-b384d767515d.c6762d3e.160x160o.63c468552ead@2x.png'),
    (8603405, 'https://images.chesscomfiles.com/uploads/v1/master_player/fc77c8fe-c0d2-11e8-9953-69dae18ad41c.1ed0c263.160x160o.5a057fa35adc@2x.jpeg'),
    (12940690, 'https://images.chesscomfiles.com/uploads/v1/master_player/c63f0376-98cd-11eb-9680-8b9564782d71.dac7492c.160x160o.bacaf3fcb7c6@2x.jpg'),
    (14204118, 'https://images.chesscomfiles.com/uploads/v1/master_player/31312204-98ce-11eb-a526-bf8e17d64341.9d09bea2.160x160o.61a559d690f2@2x.jpg'),
    (24116068, 'https://images.chesscomfiles.com/uploads/v1/master_player/93222764-bd80-11e8-b51a-fd14c22a36df.a931527c.160x160o.a0852c56a701@2x.jpeg'),
    (13300474, 'https://images.chesscomfiles.com/uploads/v1/master_player/4118050c-c004-11e8-bb10-a1a4e591dae7.1cb2c9a8.160x160o.d0079d7ad94e@2x.jpeg'),
    (5000017, 'https://images.chesscomfiles.com/uploads/v1/master_player/3586d30a-bfe9-11e8-ab4c-1fb3088203eb.90d908d0.160x160o.e00ba39cb8dc@2x.jpeg'),
    (4168119, 'https://images.chesscomfiles.com/uploads/v1/master_player/cf02cd92-c0a0-11e8-b780-451d887b5ef3.242dbfa0.160x160o.84fdae8bd50b@2x.jpg'),
    (13401319, 'https://images.chesscomfiles.com/uploads/v1/master_player/49070142-c00d-11e8-9efd-03a2cb777504.441ef98c.160x160o.01e6906f59d2@2x.jpeg'),
    (623539, 'https://images.chesscomfiles.com/uploads/v1/master_player/eb25fede-c007-11e8-b889-f36424f6d552.e4882c0d.160x160o.0757db9436fc@2x.png'),
    (3503240, 'https://images.chesscomfiles.com/uploads/v1/master_player/ef746204-c008-11e8-9179-bfa729926b5d.631b38e0.160x160o.980c5d75214a@2x.jpeg'),
    (8603677, 'https://images.chesscomfiles.com/uploads/v1/master_player/cba87604-a917-11ef-a2da-95ea51a85e7c.854c123d.160x160o.9327ed0df64d@2x.png'),
    (2093596, 'https://images.chesscomfiles.com/uploads/v1/master_player/85b707c8-3eac-11ed-ac16-bb58e158e67f.7ca6d854.160x160o.972c242bd8df@2x.jpeg'),
    (24130737, 'https://images.chesscomfiles.com/uploads/v1/master_player/64e691f8-c0cf-11e8-ae7a-a378c78fb42f.f9f8f7b1.160x160o.ad04e582eec2@2x.jpeg'),
    (1170546, 'https://images.chesscomfiles.com/uploads/v1/master_player/5a58c516-9da7-11e9-99d4-9bc22a7718ac.d5621cad.160x160o.99d0b8b9fd73@2x.png'),
    (12401137, 'https://images.chesscomfiles.com/uploads/v1/master_player/d46d920c-d6a9-11e8-b7a5-21bd8913c430.d0f45a94.160x160o.b9488fe8d932@2x.jpeg'),
    (14205483, 'https://images.chesscomfiles.com/uploads/v1/master_player/35f7187a-a756-11eb-8022-7f37ffc71412.7d6088cb.160x160o.25c73573201d@2x.jpeg'),
    (2900084, 'https://images.chesscomfiles.com/uploads/v1/master_player/e9640f50-c002-11e8-b93d-e56e1835faa8.4a751865.160x160o.a828acd7a066@2x.png'),
    (8603820, 'https://images.chesscomfiles.com/uploads/v1/master_player/9f018c36-c0ce-11e8-abf2-6dee6b9687ab.6a735b0e.160x160o.c3c0bea8a102@2x.jpeg'),
    (5029465, 'https://images.chesscomfiles.com/uploads/v1/master_player/f6d6d6f2-3e07-11ea-aa43-d1e88d4e67c9.ed7e84bb.160x160o.4b2bf5d84934@2x.jpg'),
    (5072786, 'https://images.chesscomfiles.com/uploads/v1/master_player/e80a864c-b579-11eb-94d9-7f569f8aee27.19510fc3.160x160o.c530b3dee092@2x.png'),
    (738590, 'https://images.chesscomfiles.com/uploads/v1/master_player/fb05b676-c0b3-11e8-a50f-dd344423a456.1cfd993e.160x160o.83189933d19a@2x.png'),
    (4158814, 'https://images.chesscomfiles.com/uploads/v1/master_player/5826499c-9da9-11e9-b43a-6f7fb9e910fa.61d6513e.160x160o.73d5325e6e6d@2x.jpeg'),
    (5007003, 'https://images.chesscomfiles.com/uploads/v1/master_player/179a4e1c-c0a2-11e8-a89d-d5b2ce47bc0f.51115246.160x160o.dfadd5fd0234@2x.jpeg'),
    (2056437, 'https://images.chesscomfiles.com/uploads/v1/master_player/b9857098-98cd-11eb-ab0e-db403f7f6ee7.bc364a1e.160x160o.86969107a9a3@2x.png'),
    (8602883, 'https://images.chesscomfiles.com/uploads/v1/master_player/85fbb342-c0a1-11e8-a12d-6f640d0548e8.28a353e7.160x160o.fd7a41ddd237@2x.png'),
    (25092340, 'https://images.chesscomfiles.com/uploads/v1/master_player/279c05c6-9232-11eb-928e-ab6c59db8d29.ab91c7ad.160x160o.b987260d4739@2x.jpg'),
    (2040506, 'https://images.chesscomfiles.com/uploads/v1/master_player/a9a370a6-4542-11ea-b0bc-59fa017802a0.9418dfa6.160x160o.0ea4cfe08f94@2x.jpeg'),
    (1039784, 'https://images.chesscomfiles.com/uploads/v1/master_player/0a158512-5d6d-11eb-b752-b5fd1d74df63.4770aa27.160x160o.31a33b659ecf@2x.jpeg'),
    (12539929, 'https://images.chesscomfiles.com/uploads/v1/master_player/f9217398-42d7-11ea-9f23-6d3080b07632.bbb927a5.160x160o.4aa771948cf0@2x.jpeg'),
    (13400924, 'https://images.chesscomfiles.com/uploads/v1/master_player/15dc583e-9d99-11e9-acb3-2943cca8973d.402c8dcc.160x160o.78290ac02db7@2x.png'),
    (24126055, 'https://images.chesscomfiles.com/uploads/v1/master_player/c824e10c-3f0e-11ea-8f94-690a403a4bfa.cfe95dda.160x160o.da10e9b152e4@2x.jpeg'),
    (24175439, 'https://images.chesscomfiles.com/uploads/v1/master_player/cc7b45f8-5f0f-11eb-a682-7b4a189b32aa.1f4a899a.160x160o.38b17f732078@2x.jpeg'),
    (24133795, 'https://images.chesscomfiles.com/uploads/v1/master_player/95f9a99c-4544-11ea-b858-3bf0e7ca7587.81a3c841.160x160o.2a4e340f39b1@2x.jpeg'),
    (8601445, 'https://images.chesscomfiles.com/uploads/v1/master_player/0fc2823c-9daa-11e9-acbf-8d960a1636cb.61f47f58.160x160o.95a339bd6f28@2x.jpeg'),
    (14102951, 'https://images.chesscomfiles.com/uploads/v1/master_player/4c1dcc14-4548-11ea-88d9-eba81c0d6eae.5cdd09da.160x160o.4e82029d14f6@2x.jpeg'),
    (4102142, 'https://images.chesscomfiles.com/uploads/v1/master_player/7ec489f6-c00a-11e8-a7b5-05b84640c4a5.d4a2965f.160x160o.5ee9026ebe4d@2x.jpeg'),
    (14203987, 'https://images.chesscomfiles.com/uploads/v1/master_player/dc687a42-98cd-11eb-9098-8b6fac22c251.1a293f98.160x160o.4620567a9a54@2x.jpg'),
    (14200244, 'https://images.chesscomfiles.com/uploads/v1/master_player/6ffc35d0-c001-11e8-9151-f5a0921c3df6.bfdb9898.160x160o.7770a1703816@2x.jpeg'),
    (2023970, 'https://images.chesscomfiles.com/uploads/v1/master_player/bcaf0fb2-c0d6-11e8-8f18-d5f0ac9148ea.ac6f0184.160x160o.fec3005cda43@2x.jpeg'),
    (4135539, 'https://images.chesscomfiles.com/uploads/v1/master_player/12dbf038-3eff-11ea-b3a3-01867fa77c7d.d52fb1b9.160x160o.3ce15c18dff4@2x.png'),
    (1226380, 'https://images.chesscomfiles.com/uploads/v1/master_player/4bb0daac-98ce-11eb-86c4-5b0b649ba034.4951bf42.160x160o.86a08bf539b5@2x.jpeg'),
    (12521213, 'https://images.chesscomfiles.com/uploads/v1/master_player/212941e8-98ce-11eb-8731-4f9422c9e67f.880d18b4.160x160o.f5d3e035ff81@2x.jpg'),
    (24651516, 'https://images.chesscomfiles.com/uploads/v1/master_player/8e190412-6a3b-11eb-bd46-a53713fa8270.6ba7bc47.160x160o.5e8cdefae31b@2x.jpeg'),
    (44155573, 'https://images.chesscomfiles.com/uploads/v1/master_player/9dc2289c-a755-11eb-bf85-65e5b7e57acc.0a8a3622.160x160o.45116a58c26f@2x.png'),
    (2004887, 'https://images.chesscomfiles.com/uploads/v1/master_player/79f30560-9db3-11e9-81d2-63a309602911.c641b624.160x160o.1999a9970f43@2x.jpeg'),
    (14117908, 'https://images.chesscomfiles.com/uploads/v1/master_player/cd03a448-b590-11eb-beb4-b54fd4cc2df6.5872a9f5.160x160o.9d01e9822aa1@2x.jpeg'),
    (5074452, 'https://images.chesscomfiles.com/uploads/v1/master_player/29b8570a-a755-11eb-9c40-b9897b61f860.570abe2e.160x160o.8b63ad5764f6@2x.png'),
    (410608, 'https://images.chesscomfiles.com/uploads/v1/master_player/14ad05fe-42d4-11ea-9916-53dead9f0784.306402c2.160x160o.2091f4771cfb@2x.jpeg'),
    (4152956, 'https://images.chesscomfiles.com/uploads/v1/master_player/e966cdb6-c00d-11e8-ace3-17cdcb76f4ec.529a4bbb.160x160o.cd4556c8e895@2x.jpeg'),
    (703303, 'https://images.chesscomfiles.com/uploads/v1/master_player/9945b5ae-bfea-11e8-9d69-b30ff23e6268.7f1b1a67.160x160o.e914467e0e28@2x.jpeg'),
    (24101605, 'https://2700chess.com/file?id=558'),
    (1118358, 'https://images.chesscomfiles.com/uploads/v1/master_player/d2ffe7be-9da3-11e9-9f15-9b4452d9b082.0595efe6.160x160o.90032eec12af@2x.png'),
    (358878, 'https://images.chesscomfiles.com/uploads/v1/master_player/efff9a10-b662-11eb-9cee-bd169f35cdf8.a912b5b5.160x160o.c4e91bdf2b92@2x.jpeg'),
    (24125890, 'https://images.chesscomfiles.com/uploads/v1/master_player/b2dc2fae-4548-11ea-982d-11e8a2ff986d.fd1db118.160x160o.c2a3a9feabc1@2x.jpeg'),
    (35093487, 'https://images.chesscomfiles.com/uploads/v1/master_player/90f63c2c-93e4-11eb-84c1-1d06e830bbc2.f3f66524.160x160o.e6463ac06670@2x.jpg'),
    (4126025, 'https://images.chesscomfiles.com/uploads/v1/master_player/11a5e2b6-c005-11e8-8f74-894171089772.f54916ef.160x160o.c775ecf604a5@2x.png'),
    (14508150, 'https://images.chesscomfiles.com/uploads/v1/master_player/5f10b622-4545-11ea-b4d5-934735c3ae7f.dc982349.160x160o.a5712fad6d02@2x.jpg'),
    (1512668, 'https://images.chesscomfiles.com/uploads/v1/master_player/c6fe1cae-b649-11eb-bc41-990159d86df3.15c33652.160x160o.31a41cffdc6c@2x.jpg'),
    (309095, 'https://images.chesscomfiles.com/uploads/v1/master_player/ba20201a-9da8-11e9-b336-81ce4c22cfe7.0a1bf13d.160x160o.c0cb72edf666@2x.png'),
    (13306766, 'https://images.chesscomfiles.com/uploads/v1/master_player/9aa06e26-98cd-11eb-9b4a-9d9503b20348.d641fd9c.160x160o.6a2b12301331@2x.png'),
    (13401653, 'https://images.chesscomfiles.com/uploads/v1/master_player/a15dd3e0-4543-11ea-88d7-b905bab85eac.0af6bf61.160x160o.3e02eddfcacf@2x.jpeg'),
    (1444948, 'https://images.chesscomfiles.com/uploads/v1/master_player/74ed0c94-a754-11eb-95df-eb2a17059b99.a6d8339c.160x160o.d9732d3efb17@2x.jpg'),
    (911925, 'https://images.chesscomfiles.com/uploads/v1/master_player/2e2bab16-a755-11eb-bbe5-cf2e7165378c.d0e08223.160x160o.e82164213b00@2x.jpeg'),
    (4116992, 'https://images.chesscomfiles.com/uploads/v1/master_player/90cf096e-c00f-11e8-84ac-472e7fe20ac5.39c4eabf.160x160o.4f2d517a8458@2x.jpeg'),
    (1710400, 'https://images.chesscomfiles.com/uploads/v1/master_player/23283f08-42da-11ea-9bab-d9c386462600.82f12f87.160x160o.e4e5976f1182@2x.jpeg'),
    (24131423, 'https://images.chesscomfiles.com/uploads/v1/master_player/c6d8ca4e-b676-11eb-9891-294717d2709e.a653b3e7.160x160o.521d22359202@2x.jpg'),
    (12909572, 'https://images.chesscomfiles.com/uploads/v1/master_player/9e6618c6-a755-11eb-bca5-17439a21ba8c.5aa7c53f.160x160o.686c84ec821a@2x.png'),
    (8603332, 'https://images.chesscomfiles.com/uploads/v1/master_player/c796c14e-b65c-11eb-b2b8-617ed0eed686.4e30f030.160x160o.36997b063bad@2x.png'),
    (400041, 'https://images.chesscomfiles.com/uploads/v1/master_player/666f8eee-c002-11e8-bc70-f9c710b26ec4.43656518.160x160o.7c4f9a418f56@2x.jpeg'),
    (44599790, 'https://images.chesscomfiles.com/uploads/v1/master_player/3b571750-f2d0-11eb-9a95-019619a2491f.0bc956e2.160x160o.ad2253b44371@2x.jpeg'),
    (712779, 'https://images.chesscomfiles.com/uploads/v1/master_player/6afd628c-b588-11eb-b2ac-a1c812bc9c74.797c119f.160x160o.a05e4085fa18@2x.jpeg'),
    (4262875, 'https://images.chesscomfiles.com/uploads/v1/master_player/14705360-a756-11eb-b421-937cc1690d7b.077143cb.160x160o.6898a2f60f9b@2x.png'),
    (14204223, 'https://images.chesscomfiles.com/uploads/v1/master_player/64589722-b807-11eb-83d3-19f1d69f8824.fcd44bda.160x160o.3019f97698f6@2x.png'),
    (2205530, 'https://images.chesscomfiles.com/uploads/v1/master_player/cb512174-3eff-11ea-a718-f3cd29491206.8bfd36f3.160x160o.391d7dd5e4c4@2x.jpeg'),
    (409561, 'https://images.chesscomfiles.com/uploads/v1/master_player/1a5f447a-42d5-11ea-affa-ef2a9f7b7bed.ad35be8c.160x160o.7ad855e356b5@2x.jpeg'),
    (12923044, 'https://images.chesscomfiles.com/uploads/v1/master_player/9b9924c0-a756-11eb-a728-6f3aee8cfe86.c879e605.160x160o.fa8ad47f2d9d@2x.png'),
    (4120787, 'https://images.chesscomfiles.com/uploads/v1/master_player/ec64d544-4482-11ea-b3b5-d72b24114d72.29c204a4.160x160o.5aeb63a53e0a@2x.jpeg'),
    (5061245, 'https://images.chesscomfiles.com/uploads/v1/master_player/0187e9fc-a756-11eb-b88e-e7641515de1b.3f56efc1.160x160o.3550d3461897@2x.jpg'),
    (2047640, 'https://images.chesscomfiles.com/uploads/v1/master_player/aedbe4a4-3e08-11ea-bd01-85758a2d38ab.613e17f5.160x160o.0ef0201c4602@2x.jpeg'),
    (9301348, 'https://images.chesscomfiles.com/uploads/v1/master_player/bf89dd64-42d2-11ea-897c-3fa2fbe1b939.9f957e76.160x160o.e1f493022b2c@2x.png'),
    (3805662, 'https://images.chesscomfiles.com/uploads/v1/master_player/7355551c-b65e-11eb-96fa-bfe288c0b95d.9634d08a.160x160o.e59d8e65a125@2x.jpeg'),
    (4108116, 'https://images.chesscomfiles.com/uploads/v1/master_player/92c4815c-a754-11eb-b4a2-4b72b61cc2d0.aac09602.160x160o.836ea98e6b56@2x.png'),
    (605506, 'https://images.chesscomfiles.com/uploads/v1/master_player/af5cfae2-42d3-11ea-b2c8-0b775a682704.c27b4e66.160x160o.96334ae65bc1@2x.jpeg'),
    (10601457, 'https://images.chesscomfiles.com/uploads/v1/master_player/a80e28e6-42d9-11ea-9482-5fd029044691.9de903fd.160x160o.709c9252d848@2x.jpeg')
    ON CONFLICT (fide_id) DO UPDATE
    SET
    fide_id = EXCLUDED.fide_id
    ;
`).then(() => {
    console.log("Players Insertion Done");
}).catch((err) => {
    console.error(err);
}).finally(() => {
    pool.end();
});