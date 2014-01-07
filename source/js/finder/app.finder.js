enyo.kind({
	name: "App.Finder",
	kind: enyo.Control,
	db:"",
  layoutKind: "FittableRowsLayout",
	classes:'main-wrap enyo-fit finder enyo-unselectable',
	create: function() { 
		this.inherited(arguments);
		this.db=app.db.items;
		this.$.list.setCount(this.db.length);
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
		    {kind: "onyx.Input",name:"q",classes:"q", placeholder: "Enter some text...", oninput: "searchInputChange"}
			]}
		]},
		{kind: "Panels",classes:"scroll-panal", fit: true, draggable: false,  
		components: [{
				name:"list",
				kind:"List",
				classes: "enyo-fit", 
				strategyKind: "TranslateScrollStrategy",  
				touch:true,
				onSetupItem: "setupItem",
    		count: 5,
    		fixedHeight: true,
    		classes: "enyo-fit",
				components:[
				{name:"itemView",onclick:"itemTap",kind:"App.Finder.ItemList"}
			]}
		]}
	],
	itemTap:function(inSender, inEvent){
		var item=new App.Item({"lotId":inSender.children[0].children[0].content});
   	item.renderInto(document.body);
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
	setupItem:function(inSender, inEvent){ 
    var i = inEvent.index;
    var data = this.filter ? this.filtered : this.db;
	  var item = data[i];
	  this.$.itemView.setContentData(item);
	},
	searchInputChange:function(inSender) {
		enyo.job(this.id + ":search", this.bindSafely("filterList", inSender.getValue()), 200);
		return true;
	},
	filterList: function(inFilter) {
		if (inFilter != this.filter) {
			this.filter = inFilter;
			this.filtered = this.generateFilteredData(inFilter);
			this.$.list.setCount(this.filtered.length);
			this.$.list.reset();
		}
	},
	generateFilteredData: function(inFilter) {
		var re = new RegExp("^" + inFilter, "i");
		var r = [];
		for (var i=0, d; (d=this.db[i]); i++) {
			if (d.lotName.match(re)) {
				d.dbIndex = i;
				r.push(d);
			}
		}
		return r;
	}
});
