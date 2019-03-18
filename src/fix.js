const StatsD = require('hot-shots');

function errorHandler() {
  console.log('Error Handler');
}

const client = new StatsD({
  host: 'www.example.com',
  errorHandler
});
client.increment('example', );
