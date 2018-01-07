var chat = $('#chat-widget');
var sendMessage = $('#btn-send-message');
var minimizeChat = $('#btn-minimize');
var closeChat = $('#btn-close');
var openchat = $('#open-chat');

//chat panel builder

//end chat panel builder

$(document).ready(function() {
    chat.hide();

    openchat.click(function(){
        openchat.hide();
        chat.show();
    });

    minimizeChat.click(function(){
        chat.hide();
        openchat.show();
    });

    closeChat.click(function(){
        chat.hide();
        openchat.show();
    });

    sendMessage.click(function(){
        alert('asdkljaskld');
    });    
});

