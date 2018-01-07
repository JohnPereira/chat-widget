//variables:
var src_avatar = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg';
var src_chat_name = 'Nick';

var chat = $('#chat-widget');
//header
var avatar = '<img src="'+src_avatar+'" alt="avatar" />';
var chat_about = '<div class="chat-about"><div class="chat-name">' + src_chat_name + '</div><div class="chat-status">Activo <i class="fa fa-circle online"></i></div></div>';
var chat_menu = '<div class="chat-menu"><i id="btn-minimize" class="fa fa-minus" aria-hidden="true"></i><i id="btn-close" class="fa fa-times" aria-hidden="true"></i></div>';
var header = '<div class="panel-heading"><div class="chat-header-content clearfix">' + avatar + chat_about + chat_menu + '</div></div>';
//end header

//body
var message_received = '<div class="message"><div class="other-img ml-1"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" /></div><div class="other-message ml-1"><div>Are we meeting today? Project has been already finished and I have results to show you.</div></div></div>';
var message_send = '<div class="message clearfix"><div class="my-message float-right mr-1"><div>Are we meeting today? Project has been already finished and I have results to show you.</div></div></div>';
//var chat_history = '<div class="chat-history">' + message_received + message_send + message_received + message_send + '</div>'; //a este es al que hay que hacer el append de los mensajes
var chat_history = '<div class="chat-history"></div>';
var body = '<div class="panel-body">' + chat_history + '</div>';
//end body

//footer
var input_message = '<textarea id="input-message" rows="1" class="form-control input-sm" placeholder="Escribe aquí!!!"></textarea>';
var button = '<span class="input-group-btn"><button id="btn-send-message" class="btn btn-success btn-sm">Enviar</button></span>';
var footer = '<div class="panel-footer"><div class="input-group">' + input_message + button + '</div></div>';
//end footer
chat.append(header);
chat.append(body);
chat.append(footer);