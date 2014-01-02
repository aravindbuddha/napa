enyo.kind({
	name: "App.Nav",
	kind: enyo.Control,
	fit: false,
	components:[
		{tag: "nav", classes:'side-nav',components: [
			{tag:'ul',},
			{tag:'li',name:"user", classes:'user fi-user', content:"Rayn Marphy"},
			{tag:'li',name:"userTag", classes:"item-id fi-label",content:"#1525"},
			{tag:'li',name:"finder", classes:"finder fi-search",content:"Barrel Lot Finder",ontap:"finderTap"},
			{tag:'li',name:"order", classes:"my-bid fi-order",content:"My Bid",ontap:"myBidAction"},
			{tag:'li',name:"watchList", classes:"my-watch fi-drink",content:"My Watch List",ontap:"myWatchListTap"},
			{tag:'li',name:"notification", classes:"notification fi-notification",content:"Notifications",onTap:"notificationAction"},
			{tag:'li',name:"help", classes:"help fi-help",content:"Help", ontap: "thingTap"}
		]},
	],
	thingTap: function(inSender, inEvent) {
	   alert('hi');
	},
	finderTap: function(inSender, inEvent){ 
		var find=new App.Find();
		find.renderInto(document.body);
		
	},
	myBidAction:function(){

	},
	myWatchListTap:function(){
		var mywatch=new App.MyWatch();
		mywatch.renderInto(document.body);
	},
	notificationAction:function(){
		
	},
	helpAction:function(){

	}

});
