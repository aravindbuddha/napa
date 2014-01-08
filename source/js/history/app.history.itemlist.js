enyo.kind({
	name: "App.History.ItemList",
	kind: enyo.Control,
	published:{
		paddleId:"",
    location:"",
		amount:"",
		time:""
	},
	tag: "div", 
	classes:"history-items",
	components: [
		{tag:"span",name:"idname",classes:"idname",components:[
			{tag:"span",name:"paddleId"},
      {tag:"br"},
			{tag:"span",name:"location"}
		]},
		{tag:"span",name:"amount",classes:"amount",content:"NIL"},
		{tag:"span",name:"time",classes:"time",content:"NIL"}
	],
  setContentData:function(item){ 
    this.$.paddleId.setContent("Paddle #"+item.paddleId);
    this.$.location.setContent("("+item.location+")");
    this.$.amount.setContent("$"+item.amount);
    this.$.time.setContent(item.time);
  }
});

