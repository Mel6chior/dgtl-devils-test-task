import { Logger } from "@nestjs/common";
import { execSync } from "child_process";
import { join } from "path";

const migrationName = process.argv[2];
if (!migrationName) {
    Logger.error('Please provide a migration name');
    process.exit(1);
}

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