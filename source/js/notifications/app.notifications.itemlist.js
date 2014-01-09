enyo.kind({
	name: "App.Notifications.ItemList",
	kind: enyo.Control,
	classes:"notification-item",
	components: [
		{kind:"FittableColumns",components:[
			{tag:'div',classes:"img fi-drink"},
			{tag:'div',fit:true,name:"msg",classes:"msg",content:"NIL"}
		]}
	],
	setContentData:function(msg){ 
		this.$.msg.setContent(msg);
	}
});

