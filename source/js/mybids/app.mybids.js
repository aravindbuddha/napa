enyo.kind({
	name: "App.MyBids",
	kind: enyo.Control,
	db:{},
	fit: true,
	tag:'div',
	classes:'main-wrap mybids',
	create: function() { 
		this.inherited(arguments);
		this.displayItems();
  },
	components:[
		{tag:"div",classes:"toolbar", components: [
			{tag:'a',ontap:"navIconTap",name:"navIcon",href:"#",classes:"nav-icon-wrap",components:[
				{tag:'span',classes:"nav-icon"}
			]},
			{tag:'h1',name:"heading",classes:"heading",content:"My Bids"},
			{tag:'div',classes:"clear"}
		]},
		{kind: "enyo.Scroller",strategyKind:"TransitionScrollStrategy", horizontal: "hidden",touch: true,fit: true, components: [
			{kind:App.Nav, name:'side',classes:'side-wrap'},
			{tag:"div",classes:"inner-wrap",components:[
				{tag:'div',classes:'headder',components:[
					{tag:'b',content:"Wine from"},
					{tag:'b',content:"Position"},
					{tag:'b',content:"Amt"},
					{tag:'b',content:"High"}
				]},
				{name:"main", allowHtml: true}
			]}
		]}
	],
	navIconTap: function(inSender, inEvent) {
		var nav=this.$.navIcon;
		if(!this.$.navIcon.attributes.isActive){
			this.$.side.addClass('active');
			nav.attributes.isActive=true;
		}else{
			this.$.side.removeClass('active');
			nav.attributes.isActive=false;
		}
	},
	displayItems: function(inRequest, inResponse) { 
		var l = new enyo.Control;
		var main=this.$.main;
		main.destroyClientControls();
		app.getMyBids().forEach(function(Item){
			l.createComponent({
				kind: App.MyBids.ItemList,
				container: main,
				id:"#"+Item.lotId+" ",
				lotname:Item.lotName.substring(0,6)+"...",
				position:Item.position,
				amount:Item.amount,
				high:Item.high
			});
		});
		this.$.main.render();
	},	
});
