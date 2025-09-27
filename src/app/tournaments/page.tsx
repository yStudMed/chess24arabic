import type { Metadata } from 'next';
import styles from "./tournaments.module.css";
import TrophySVG from './TrophySVG';
import dbPoolInstance from '../../../lib/pool';
import { dbPoolConfigOptions } from '../../../lib/dbPoolConfigOptions';

export const metadata: Metadata = {
    title: 'مسابقات و بطولات',
};


export default async function TournamentsPage() {
    const data = await dbPoolInstance.query(`SELECT * FROM tournaments`, [], dbPoolConfigOptions);
    console.log(data);
    return (
        <div className={styles['tournaments-container']}>
            <h1>
                <TrophySVG/>
                <span>
                    فعاليات ومسابقات الشطرنج
                </span>
            </h1>
            <ul>
                <li>
                    <a>
                        <div>
                            something
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
};