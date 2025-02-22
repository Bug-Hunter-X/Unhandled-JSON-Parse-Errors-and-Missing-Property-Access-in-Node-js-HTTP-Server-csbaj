# Unhandled JSON Parse Errors and Missing Property Access in Node.js HTTP Server

This repository demonstrates a common error in Node.js HTTP servers: crashing due to unhandled exceptions when processing JSON requests.  The server is vulnerable to crashing if it receives:

1.  A request with a non-JSON body.
2.  A JSON request missing expected properties.

The `bug.js` file shows the vulnerable code. The `bugSolution.js` shows improved code with comprehensive error handling and input validation, preventing crashes and providing informative error responses to clients.

## How to Reproduce the Bug

1.  Clone this repository.
2.  Run `node bug.js`.
3.  Send a request to `http://localhost:3000` with a non-JSON body (e.g., using curl).
4.  Send a JSON request without the `name` property (e.g., `{"age": 30}`).

The server will crash in both scenarios.

## How to Run the Solution

1.  Run `node bugSolution.js`.
2.  Send requests as described above. The server will now respond gracefully with appropriate HTTP error codes and informative messages.