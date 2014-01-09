enyo.kind({
	name: "App.Nav",
	kind: enyo.Control,
	fit: false,
	create: function() { 
		this.inherited(arguments);
		var user=app.getUserByPaddle(app.paddleId);
		this.$.userName.setContent(user.username);
		this.$.paddleId.setContent("#"+app.paddleId);
	},
	components:[
		{tag: "nav", classes:'side-nav',components: [
			{tag:'ul',},
			{tag:'li',name:"userName", classes:'user fi-user', content:"User"},
			{tag:'li',name:"paddleId", classes:"item-id fi-label",content:"#000"},
			{tag:'li',name:"finder", classes:"finder fi-search",content:"Barrel Lot Finder",ontap:"finderTap"},
			{tag:'li',name:"order", classes:"my-bid fi-order",content:"My Bid",ontap:"myBidTap"},
			{tag:'li',name:"watchList", classes:"my-watch fi-drink",content:"My Watch List",ontap:"myWatchListTap"},
			{tag:'li',name:"notification", classes:"notification fi-notification",content:"Notifications",ontap:"notificationTap"},
			{tag:'li',name:"help", classes:"help fi-help",content:"Help", ontap: "helpTap"}
		]},
	],
	finderTap: function(inSender, inEvent){ 
		var find=new App.Finder();
		find.renderInto(document.body);
	},
	myBidTap:function(){ 
		var myBids=new App.MyBids();
		myBids.renderInto(document.body);
	},
	myWatchListTap:function(){
		var mywatch=new App.MyWatch();
		mywatch.renderInto(document.body);
	},
	notificationTap:function(){
		var notification=new App.Notifications();
	  notification.renderInto(document.body);
	},
	helpTap:function(){

	}

});
