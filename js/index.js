var chat = $('#chat-widget');
var sendMessage = $('#btn-send-message');
var minimizeChat = $('#btn-minimize');
var closeChat = $('#btn-close');
var openchat = $('#open-chat');
var inputMessage = $('#input-message');

$(document).ready(function() {

    var ws = new WebSocket('ws://localhost:8082');
    ws.onopen = function () {
        ws.send('hola');
    }
    // event emmited when receiving message 
    ws.onmessage = function (ev) {
        var message_received = '<div class="message"><div class="other-img ml-1"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" /></div><div class="other-message ml-1"><div>' + ev.data + '</div></div></div>';
        $('.chat-history').append(message_received);
    }
    
    chat.hide();
    inputMessage.val('');

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
        var ws = new WebSocket('ws://localhost:8082');
        ws.onopen = function () {
            var message_send = '<div class="message clearfix"><div class="my-message float-right mr-1"><div>' + inputMessage.val() + '</div></div></div>';
            $('.chat-history').append(message_send);
            ws.send(inputMessage.val());
            inputMessage.val('');
        }

        // event emmited when receiving message 
        ws.onmessage = function (ev) {
            var message_received = '<div class="message"><div class="other-img ml-1"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" /></div><div class="other-message ml-1"><div>' + ev.data + '</div></div></div>';
            $('.chat-history').append(message_received);
        }
    });    
});

