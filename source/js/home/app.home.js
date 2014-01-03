enyo.kind({
	name: "App.Home",
	kind: "FittableRows",
	classes:'main-wrap enyo-fit enyo-unselectable',
	components:[
		{kind: "onyx.Toolbar", components: [
			{tag:'a',ontap:"navIconTap",name:"navIcon",href:"#",classes:"nav-icon-wrap",components:[
				{tag:'span',classes:"nav-icon"}
			]},
			{tag:'h1',name:"heading",classes:"heading",content:"Napa Valley 2014 Aution"},
			{tag:'div',classes:"clear"}
		]},
	  {kind:App.Nav, name:'side',classes:'side-wrap'},
		{kind: "Panels", fit: true, draggable: false, classes: "scroller-sample-panels", components: [
			{kind: "Scroller", classes: "enyo-fit", strategyKind: "TranslateScrollStrategy", thumb: true,touch: true,name:"main", allowHtml: true}
		]}
	],
	create: function() {
		this.inherited(arguments);
		this.displayIteams();
  },
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
	getData:function(){ 
		var base=this,xhr;
		//set up enyo.AjaxProperties the enyo.Ajax constructor
    xhr = new enyo.Ajax({url: "source/js/db.json"});
    xhr.response(enyo.bind(this, "processResults"));
		xhr.go();
	},
	displayIteams: function() { 
		var l = new enyo.Control;
		var main=this.$.main;
		main.destroyClientControls();
		
		app.db.items.forEach(function(iteam){
			l.createComponent({
				kind: App.Home.IteamShort,
				container: main,
				pic:iteam.pic,
				id:iteam.id,
				lotname:iteam.lotName,
				amount:iteam.amount,
				time:iteam.time
			});
		});
		this.$.main.render();
	},	
});
