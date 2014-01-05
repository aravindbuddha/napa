enyo.kind({
	name: "App.Finder",
	kind: "FittableRows",
	classes:'main-wrap enyo-fit enyo-unselectable',
	create: function() { 
		this.inherited(arguments);
		this.displayIteams();
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
		{kind: "Panels",classes:"scroll-panal", fit: true, draggable: false,  components: [
			{kind: "Scroller", horizontal:'hidden', classes: "enyo-fit", strategyKind: "TranslateScrollStrategy",  touch:true,fit: true, components: [
				{tag:"input",name:"q",classes:"q fi-search",attributes: 
					{type: "search",placeholder:"Enter term.."}
				},
				{name:"main",allowHtml: true}
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
				kind: App.Finder.IteamList,
				container: main,
				id:iteam.id,
				lotname:iteam.lotName,
				desc:iteam.desc.substr(0,64)+"..."
			});
		});
		this.$.main.render();
	}
});
