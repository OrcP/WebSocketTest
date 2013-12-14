var orcpChat = {};
(function() {
	var console = window.console || { log:function(){}} ;

	orcpChat.isSocketInWindows = function() {
		return 'WebSocket' in window;
	};
	
	orcpChat.makeSocket = function() {
		if(orcpChat.isSocketInWindows()){
			console.log("socket in windos, makeSocket");
			var socket = new WebSocket("ws://218.152.129.3:8080");
		}
	};
	
});