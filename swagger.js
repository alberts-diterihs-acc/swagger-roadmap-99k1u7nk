import fs from 'fs';
import yaml from 'js-yaml';

const swaggerSpec = yaml.load(fs.readFileSync('./swagger.yml', 'utf8'));

export default swaggerSpec;
