enyo.kind({
	name: "App.MyWatch",
	kind: enyo.Control,
	db:{},
	fit: true,
	tag:'div',
	classes:'main-wrap',
	create: function() { 
		this.inherited(arguments);
		this.displayIteams();
  },
	components:[
		{tag:"div",classes:"toolbar", components: [
			{tag:'a',ontap:"navIconTap",name:"navIcon",href:"#",classes:"nav-icon-wrap",components:[
				{tag:'span',classes:"nav-icon"}
			]},
			{tag:'h1',name:"heading",classes:"heading",content:"My Watchlist"},
			{tag:'div',classes:"clear"}
		]},
		{kind: "enyo.Scroller", fit: true, components: [
			{kind:App.Nav, name:'side',classes:'side-wrap'},
			{tag:"div",classes:"inner-wrap",components:[
				{tag:'div',classes:'headder',components:[
					{tag:'b',content:"Wine from"},
					{tag:'b',content:"Current Bid"},
					{tag:'b',content:"Time Left"}
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
	displayIteams: function(inRequest, inResponse) { 
		var l = new enyo.Control;
		var main=this.$.main;
		main.destroyClientControls();
		app.db.items.forEach(function(iteam){
			l.createComponent({
				kind: App.MyWatch.IteamList,
				container: main,
				id:"#"+iteam.id+" ",
				lotname:iteam.lotName.substring(0,6)+"...",
				amount:iteam.amount,
				time:iteam.time
			});
		});

		this.$.main.render();
	},	
});
