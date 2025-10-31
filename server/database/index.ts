import { Logger } from "@nestjs/common";
import { execSync } from "child_process";
import { join } from "path";
import { v4 } from "uuid";

const migrationName = v4();

const migrationPath = join(process.cwd(), 'database/migrations/', migrationName);

const command = `typeorm-ts-node-commonjs migration:generate -d ./database/datasource.ts ${migrationPath}`;

Logger.log(`Generating migration: ${migrationName}`);
Logger.log(`Command: ${command}`);

try {
    execSync(command, { stdio: 'inherit'});
} catch(err) {
    Logger.error('Error during migration generating: ${err}');
    process.exit(1);  
};