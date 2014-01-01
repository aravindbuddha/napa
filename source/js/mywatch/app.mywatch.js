enyo.kind({
	name: "App.MyWatch",
	kind: enyo.Control,
	db:{},
	fit: true,
	tag:'div',
	classes:'main-wrap',
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
			{name:"main", allowHtml: true}
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
	processResults: function(inRequest, inResponse) { 
		var l = new enyo.Control;
		var main=this.$.main;
		main.destroyClientControls();
		inResponse.items.forEach(function(iteam){
			l.createComponent({
				kind: App.MyWatch.IteamList,
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
