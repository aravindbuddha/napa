enyo.kind({
	name: "App.MyWatch.IteamList",
	kind: enyo.Control,
	published:{
		id:"",
		lotname:"",
		amount:"",
		time:""
	},
	tag: "div", 
	classes:"watchlist-item",
	components: [
		{tag:"a",href:"",components:[
			{tag:"span",name:"id"},
			{tag:"span",name:"lotname"}
		]},
		{tag:"span",name:"amount",content:"NIL"},
		{tag:"span",name:"time",content:"NIL"},
		{tag:"button",name:"myWathBidBtn",content:"Bid"},

	],
	create: function() {
    this.inherited(arguments);
    this.idChanged();
    this.lotnameChanged();
    this.amountChanged();
    this.timeChanged();
  },
  idChanged:function(){
  	this.$.id.setContent(this.id);
  },
  lotnameChanged:function(){
  	this.$.lotname.setContent(this.lotname);
  },
  amountChanged:function(){
  	this.$.amount.setContent(this.amount);
  },
  timeChanged:function(){
  	this.$.time.setContent(this.time);
  }
});

