const io = require('socket.io')();
/**
 * Initializes the socket.io server
 * @returns {void}
 */
function init() {

    io.on('connection', (socket) => {
        console.log('a user connected');

        socket.on('sending_notification', (data) => {
            console.log('sending_notification');
            socket.broadcast.emit('notification_sent', data);
        })

        socket.on('disconnect', () => {
            console.log('user disconnected');
        })

    });
}
module.exports.init = init