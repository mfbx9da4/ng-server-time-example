var server_time = require('ng-server-time');
// export function for listening to the socket
module.exports = function (socket) {
    server_time.init(socket);
};
