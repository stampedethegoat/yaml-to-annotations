const yaml      = require('js-yaml');
const fs        = require('fs');
const FILE_PATH = './file-yamls/06-jmx.yaml';
 
let main = (name = 'container_identifier') => {
  let obj = yaml.safeLoad(fs.readFileSync(FILE_PATH, 'utf8'));
  console.log(`ad.datadoghq.com/${name}.check_names: ${JSON.stringify(obj.check_names) || '[]'}`)
  console.log(`ad.datadoghq.com/${name}.init_configs: ${JSON.stringify(obj.init_config, null, 2) || '[]'}`);
  console.log(`ad.datadoghq.com/${name}.instances: ${JSON.stringify(obj.instances, null, 2) || '[]'}`);
  console.log(`ad.datadoghq.com/${name}.logs: ${JSON.stringify(obj.log_config, null, 2) || '[]'}`);
}

try { main() } 
catch (e) { console.log(e) }
