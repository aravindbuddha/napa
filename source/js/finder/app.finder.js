enyo.kind({
	name: "App.Finder",
	kind: enyo.Control,
  layoutKind: "FittableRowsLayout",
	classes:'main-wrap enyo-fit finder enyo-unselectable',
	create: function() { 
		this.inherited(arguments);
		//this.displayItems();
  },
	components:[
		{kind: "onyx.Toolbar", components: [
			{tag:'a',ontap:"navIconTap",name:"navIcon",href:"#",classes:"nav-icon-wrap",components:[
				{tag:'span',classes:"nav-icon"}
			]},
			{tag:'h1',name:"heading",classes:"heading",content:"Barrel Lot Finder"},
			{tag:'div',classes:"clear"}
		]},
		{kind:App.Nav, name:'side',classes:'side-wrap'},
		{tag:'div',classes:"inner-wrap",components:[
			{kind: "onyx.InputDecorator",classes:"finder-search",components: [
				{tag:"div", classes:"fi-search"},
		    {kind: "onyx.Input",name:"q",classes:"q", placeholder: "Enter some text...", onchange: "search"}
			]}
		]},
		{kind: "Panels",classes:"scroll-panal", fit: true, draggable: false,  components: [
			{kind: "Scroller", horizontal:'hidden', classes: "enyo-fit", strategyKind: "TranslateScrollStrategy",  touch:true,fit: true, components: [
				{kind: "List", onSetupItem: "setupItem",name:"main",classes:"inner-wrap",allowHtml: true,components:[
					{kind:"FittableColumns",ontap:"itemTap",components:[
						{tag:'div',name:"id",classes:"id"},
						{tag:'div',classes:"info",components:[
							{tag:'b',name:'lotname',classes:'lotname'},
							{tag:'span',name:'desc',classes:'desc'}
						]}
					]}
				]}
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
	setupItem:function(){ alert("hi");
		this.setContentData(app.db.items);
		return true;
	},
	setContentData:function(item){
		this.$.id.setContent(item.id);
		this.$.lotname.setContent(item.lotname);
		this.$.desc.setContent(item.desc);
	},
	search:function(){

	},
	displayItems: function() { 
		var l = new enyo.Control;
		var main=this.$.main;
		main.destroyClientControls();
		app.db.items.forEach(function(Item){
			l.createComponent({
				kind: App.Finder.ItemList,
				container: main,
				id:Item.id,
				lotname:Item.lotName,
				desc:Item.desc.substr(0,64)+"..."
			});
		});
		this.$.main.render();
	}
});
