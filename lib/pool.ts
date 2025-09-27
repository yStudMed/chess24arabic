import pg, { PoolConfig, QueryResult, QueryResultRow } from "pg";

class Pool {
    private __pool: pg.Pool | null = null;
    private __connecting: Promise<void> | null = null;
    private async ensureConnected(options: PoolConfig) {
        // If already connected, nothing to do
        if (this.__pool) return;
        // If another call is already connecting, await it
        if (this.__connecting) {
            await this.__connecting;
        return;
        };
        // Otherwise start connecting
        this.__connecting = (async () => {
            this.__pool = new pg.Pool(options);
        })();
        await this.__connecting;
        this.__connecting = null;
    };
    // Take Care of Security Here !
    public async query<T extends QueryResultRow = QueryResultRow>(sql: string, values: [], options: PoolConfig): Promise<QueryResult<T>> {
        if (!this.__pool && !options) {
            throw new Error(
            "Pool not initialized. Provide PoolConfig the first time you call query()."
            );
        };
        await this.ensureConnected(options as PoolConfig);
        return this.__pool!.query(sql, values);
    };
    public close() {
        return this.__pool?.end();
    };
};

const dbPoolInstance = new Pool();

export default dbPoolInstance;