interface Database {
	name: string;
	head: Array<string>;
	body: Array<Array<string | number>>;
}

const createTable = (db: Database) => {
	let created_db: Database = {
		name: db.name,
		head: db.head,
		body: db.body,
	};

	return created_db;
};

export default createTable;
