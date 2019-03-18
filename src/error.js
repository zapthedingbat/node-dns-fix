const StatsD = require('hot-shots');
const client = new StatsD({
  host: 'www.example.com'
});
client.increment('example');
