enyo.kind({
	name: "App.Iteam",
	kind: enyo.Control,
	lotId:"",
	iteam:"",
	fit: true,
	tag:'div',
	classes:'main-wrap iteam-full',
	create: function() {
		this.inherited(arguments);
	  this.displayIteam();
  },
	components:[
		{tag:"div",classes:"toolbar", components: [
			{tag:'h1',name:"iteamHead",classes:"heading iteam-head"},
			{tag:'div',classes:"clear"}
		]},
		{tag:"div",classes:"inner-wrap",components:[
			{kind: "enyo.Scroller", fit: true, components: [
				{tag:"img",name:"pic",classes:'pic'},
				{tag:"button",name:"amount",classes:"amountBtn"},
				{tag:"button",name:"addWatch",classes:"addWatchBtn fi-right-arrow",content:"Add to Watch"},
				{tag:"p",name:"desc",classes:'desc'},
				{tag:'a',name:"viewmore",classes:"viewmore",content:"View more",ontap:"viewMoreTap"}
			]},
			{tag:"button",classes:"iteam-bid-btn",name:"bidBtn",content:"Bid"}
		]}
	],
	displayIteam: function() { 
		iteam=app.getIteam(this.lotId);
		this.$.iteamHead.setContent("#"+iteam.id+" "+iteam.lotName);
		this.$.pic.setAttribute('src',iteam.pic.slice(0,-4)+"_big.png");
		this.$.amount.setContent("Current Bid:$"+iteam.amount);
		this.$.desc.setContent(iteam.desc.substring(0,360));
	},
	viewMoreTap:function() {
		this.$.desc.setContent(iteam.desc);
		this.$.viewmore.applyStyle('display','none');
	}	
});
