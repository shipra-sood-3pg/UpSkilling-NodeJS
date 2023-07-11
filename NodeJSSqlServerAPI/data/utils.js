import fs from 'fs-extra';
import path from 'path';

const loadSqlQueries = async (folderName) => {

    const filePath = path.join(process.cwd(), 'data', folderName);
    const files = await fs.readdir(filePath);
    const sqlFiles = files.filter(f => f.endsWith('.sql'));
    const queries = {};
    for (const sqlfile of sqlFiles) {
        const query = fs.readFileSync(path.join(filePath,  sqlfile), {encoding: "UTF-8"});
        queries[sqlfile.replace(".sql", "")] = query;
    }
    return queries;
}

export default {
    loadSqlQueries
}