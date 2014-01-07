enyo.kind({
	name: "App.Bidding",
 	kind: enyo.Control,
  layoutKind: "FittableRowsLayout",
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
		{kind: "Panels",classes:"scroll-panal", fit: true, draggable: false,  components: [
			{kind: "Scroller", classes: "enyo-fit", strategyKind: "TranslateScrollStrategy",  touch:true,components:[
				{kind: "FittableRows",name:"main", allowHtml: true}
			]}
		]}
	],
	create: function() {
		this.inherited(arguments);
		this.displayItems();
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
	displayItems: function() { 
		var l = new enyo.Control;
		var main=this.$.main;
		main.destroyClientControls();
		
		app.db.items.forEach(function(Item){
			l.createComponent({
				kind: App.Home.ItemShort,
				container: main,
				pic:Item.pic,
				id:Item.id,
				lotname:Item.lotName,
				amount:Item.amount,
				time:Item.time
			});
		});
		this.$.main.render();
	},	
});
