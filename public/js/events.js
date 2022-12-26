/**
 * This file contains all the events received from the server
 */
socket.on('sending_notification', function (data) {
    iziToast.show({
        title: 'A new question has been posted:',
        message: data.title,
        position: 'topRight',
        buttons: [
            ['<button>View</button>', function (instance, toast) {
                load_questions(data.id);
            }],
        ],
        maxWidth: 400,
        transitioIn: 'fadeInDown',
    });
})

socket.on('refresh', function (name) {
    //check if the page is the home page
    console.log('refreshed page' +
        '');
})