enyo.kind({
	name: "App.History",
	kind: enyo.Control,
	lotId:302,
	db:{},
	fit: true,
	tag:'div',
	classes:'main-wrap',
	create: function() { 
		this.inherited(arguments);
		this.displayItems();
  },
	components:[
		{tag:"div",classes:"toolbar", components: [
			{tag:'a',ontap:"navIconTap",name:"navIcon",href:"#",classes:"nav-icon-wrap",components:[
				{tag:'span',classes:"nav-icon-back fi-left-arrow"}
			]},
			{tag:'h1',name:"heading",classes:"heading",content:"Bid History"},
			{tag:'div',classes:"clear"}
		]},
		{kind: "enyo.Scroller", fit: true, components: [
			{kind:App.Nav, name:'side',classes:'side-wrap'},
			{tag:"div",classes:"inner-wrap",components:[
				{tag:'div',classes:'headder',components:[
					{tag:'b',content:"Paddle Number"},
					{tag:'b',content:"Bid amount"},
					{tag:'b',content:"Date/Time"}
				]},
				{name:"main", allowHtml: true}
			]}
		]}
	],
	navIconTap: function(inSender, inEvent) {
		
	},
	displayItems: function(inRequest, inResponse) { 
		console.log(app.getBidHistory(this.lotId));
		var l = new enyo.Control;
		var main=this.$.main;
		main.destroyClientControls();
		app.getBidHistory(this.lotId).forEach(function(Item){
			l.createComponent({
				kind: App.History.ItemList,
				container: main,
				paddleId:"#"+Item.paddleId+" ",
    		location:Item.location,
				amount:Item.amount,
				time:Item.time
			});
		});
		this.$.main.render();
	},	
});
