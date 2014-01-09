enyo.kind({
	name: "App.History.ItemList",
	kind: enyo.Control,
	published:{
		paddleId:"",
    place:"",
		amount:"",
		time:""
	},
	tag: "div", 
	classes:"history-items",
	components: [
		{tag:"span",name:"idname",classes:"idname",components:[
			{tag:"span",classes:"paddleId",name:"paddleId"},
      {tag:"br"},
			{tag:"span",name:"place"}
		]},
		{tag:"span",name:"amount",classes:"amount",content:"NIL"},
		{tag:"span",name:"time",classes:"time",content:"NIL"}
	],
  setContentData:function(item){ 
    this.$.paddleId.setContent("Paddle #"+item.paddleId);
    this.$.place.setContent("("+item.place+")");
    this.$.amount.setContent("$"+item.amount);
    this.$.time.setContent(item.time);
  }
});

