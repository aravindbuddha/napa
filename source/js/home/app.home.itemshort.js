enyo.kind({
	name: "App.Home.ItemShort",
	kind: enyo.Control,
	published:{
		pic:"",
		id:"",
		lotname:"",
		amount:"",
		time:""
	},
	classes:"item-wrap",
	components: [
		{tag: "div",classes:"item",components:[
			{kind:"FittableColumns",components:[
				{kind:"Image",name:"pic",classes:"pic",src:"#",ontap:'ItemTap'},
				{tag: "div",classes:"info",components:[
					{tag:'div',classes:'top',components:[
						{tag:'span',name:'id',classes:'id',ontap:'ItemTap'},
						{tag:'span',name:'lotname',classes:'lotname',ontap:'ItemTap'}
					]},
					{tag:'div',classes:'middle',content:"Current Bid:",components:[
						{tag:'span',name:'amount',classes:'amount'},
						{tag:'span',name:'time',classes:'time'}
					]},
					{tag:'div',classes:'bottom',components:[
						{tag:'a',name:'history',classes:'history fi-clock',content:'Bid History',ontap:"historyTap"},
						{tag:'a',name:'watchlist',classes:'watchlist fi-eye',content:'Add to my Watchlis'},
						{tag:'a',name:'bid',classes:'bid fi-order',content:'Bid',ontap:'bidTap'},
					]}
				]}
			]}
		]}
	],
	create: function() {
    this.inherited(arguments);
    this.picChanged();
    this.idChanged();
    this.lotnameChanged();
    this.amountChanged();
    this.timeChanged();
  },
  picChanged:function() {
  	this.$.pic.setAttribute("src", this.pic);
  },
  idChanged:function(){
  	this.$.id.setContent("#"+this.id);
  },
  lotnameChanged:function(){
  	this.$.lotname.setContent(this.lotname);
  },
  amountChanged:function(){
  	this.$.amount.setContent("Current Bid:$"+this.amount);
  },
  timeChanged:function(){
  	this.$.time.setContent(this.time);
  },
  historyTap:function() {
  	var history=new App.History({"lotId":this.$.id.getContent().slice(1)});
  	history.renderInto(document.body);
  },
  bidTap:function(){ 
  	app.page="home";
  	var bidding=new App.Bidding({"lotId":this.$.id.getContent().slice(1)});
		bidding.renderInto(document.body);
  },
 	ItemTap:function() {
  	var Item=new App.Item({"lotId":this.$.id.getContent().slice(1)});
  	Item.renderInto(document.body);
  }
});

