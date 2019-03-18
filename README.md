Node DNS failure experiment
===

Attempts to reproduce the `EAI_AGAIN` exception thrown in the node application that causes
the process to exit.

## Running

On a machine with node and docker installed just run `npm start`

This will:
- Build a simple node docker image
- Run the docker container with an unresponsive DNS server, and mount the current directory under `/app`
- Execute the `error.js` with node in the container
- Execute the `fix.js` with node in the container

## Result

```
Error: Error sending hot-shots message: Error: getaddrinfo EAI_AGAIN www.example.com
    at handleCallback (/app/node_modules/hot-shots/lib/statsd.js:327:32)
    at process._tickCallback (internal/process/next_tick.js:63:19)
Emitted 'error' event at:
    at handleCallback (/app/node_modules/hot-shots/lib/statsd.js:339:21)
    at process._tickCallback (internal/process/next_tick.js:63:19)
```
