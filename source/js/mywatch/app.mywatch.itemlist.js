enyo.kind({
	name: "App.MyWatch.ItemList",
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
		{tag:"a",name:"idname",href:"",ontap:"itemTap",components:[
			{tag:"span",name:"id"},
			{tag:"span",name:"lotname"}
		]},
		{tag:"span",name:"amount",content:"NIL"},
		{tag:"span",name:"time",content:"NIL"},
		{tag:"button",name:"myWathBidBtn",ontap:"bidTap",content:"Bid"},

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
  },
  itemTap:function() {
  	var Item=new App.Item({"lotId":this.$.id.getContent().slice(1)});
  	Item.renderInto(document.body);
  },
  bidTap:function(){ 
    app.page="mywatch";
    var bidding=new App.Bidding({"lotId":this.id.slice(1)});
    bidding.renderInto(document.body);
  },
});

