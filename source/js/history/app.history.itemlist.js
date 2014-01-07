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
	classes:"watchlist-item",
	components: [
		{tag:"span",name:"idname",components:[
			{tag:"span",name:"paddleId"},
			{tag:"span",name:"location"}
		]},
		{tag:"span",name:"amount",content:"NIL"},
		{tag:"span",name:"time",content:"NIL"}
	],
	create: function() {
    this.inherited(arguments);
    this.paddleIdChanged();
    this.locationChanged();
    this.amountChanged();
    this.timeChanged();
  },
  paddleIdChanged:function(){
  	this.$.paddleId.setContent(this.paddleId);
  },
  locationChanged:function(){
  	this.$.location.setContent(this.location);
  },
  amountChanged:function(){
  	this.$.amount.setContent(this.amount);
  },
  timeChanged:function(){
  	this.$.time.setContent(this.time);
  }
});

