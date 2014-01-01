enyo.kind({
	name: "App",
	kind: enyo.Object,
	db:{},
	constructor: function() {
  	//this.getData();
  },
	getData:function(){ 
		var base=this,xhr;
    xhr = new enyo.Ajax({url: "source/js/db.json"});
    xhr.response(function(inRequest, inResponse){
    	return inResponse;
    });
		xhr.go();
	}
});

