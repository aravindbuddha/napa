enyo.kind({
	name: "App.Item",
	kind: enyo.Control,
  layoutKind: "FittableRowsLayout",
	lotId:"",
	Item:"",
	classes:'main-wrap enyo-fit enyo-unselectable item-full',
	create: function() {
		this.inherited(arguments);
	  this.displayItem();
  },
	components:[
		{kind: "onyx.Toolbar", components: [
			{tag:'h1',name:"ItemHead",classes:"heading Item-head",content:"Napa Valley 2014 Aution"},
			{tag:'div',classes:"clear"}
		]},
		{kind: "Panels",fit:true,classes:"scroll-panal", components: [
			{kind: "Scroller", classes: "enyo-fit", strategyKind: "TranslateScrollStrategy",  
			touch:true,components:[
			{tag: "div",name:"main",classes:"inner-wrap",allowHtml: true,components:[
				{kind: "FittableRows",components:[
					{kind:"Image",name:"pic",classes:'pic'}
				]},
				{kind: "FittableRows",components:[
					{kind:"Button",name:"amount",classes:"amountBtn"},
					{kind:"Button",name:"addWatch",classes:"addWatchBtn fi-right-arrow",content:"Add to Watch"},
				]},
				{kind: "FittableRows",tag:"p",name:"desc",classes:'desc'},
				{tag:'a',name:"viewmore",classes:"viewmore",content:"View more",ontap:"viewMoreTap"}
			]}
			]}
		]},
		{kind:"FittableRows",classes:"inner-wrap",components:[
			{kind:"onyx.Button",ontap:"bidTap",classes:"bid-btn",name:"bidBtn",content:"Bid"}
		]}
	],
	displayItem: function() { 
		Item=app.getItem(this.lotId);
		this.$.ItemHead.setContent("#"+Item.id+" "+Item.lotName);
		this.$.pic.setAttribute('src',Item.pic.slice(0,-4)+"_big.png");
		this.$.amount.setContent("Current Bid:$"+Item.amount);
		this.$.desc.setContent(Item.desc.substring(0,360));
	},
	bidTap:function(){ 
		app.page="item";
		app.pageItemId=this.lotId;
  	var bidding=new App.Bidding({"lotId":this.lotId});
		bidding.renderInto(document.body);
  },
	viewMoreTap:function() {
		this.$.desc.setContent(Item.desc);
		this.$.viewmore.applyStyle('display','none');
	}	
});
