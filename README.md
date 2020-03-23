# nuVirtual
Our final project is a web app that allows students to communicate with instructors during virtual office hours using a real-time chat service.

To run our code, you have to start a chat server as well as an http server. NOTE: We can't guarantee that these instructions will work with non-Mac computers.

To run the chat server:
1. Navigate to the folder with our code in it using your terminal.
2. Enter `npm init` into the command line and follow the instructions by hitting "Enter."
3. Enter `npm i http://socket.io` into the command line. Ignore any error messages.
4. Enter `npm i —save-dev nodemon` into the command line. Ignore any error messages.
5. Enter `npm run devStart` into the command line. This should start the server.

To run the http server:
1. Open a separate terminal window and navigate to the folder with our code in it.
2. Enter `http-server` into the command line. If you do not have node.js installed, follow the instructions found here: https://www.npmjs.com/package/http-server
3. Copy-paste one of the available server ports into your browser and add "/welcome.html" to open our home page. You can then use our application like a normal website.
