
  "use strict";
    var app = {
        init:function(){
            // let's go
            this.listeners();
        },
        listeners:function(){
            $("#recup").on("click",this.getmarkdown.bind(this));
        },

        getmarkdown:function(){
            $.ajax("http://192.168.1.21:1337/alice.md")
            .done(this.ajaxDone)
            .fail(this.ajaxFail)
            .always(this.ajaxAlways);
        },
        ajaxDone:function(response){
        	
	      var converter = new showdown.Converter();
	      var html = converter.makeHtml(response);
	      $("#md").html(html);
	      

        },
        ajaxFail:function() {
            alert("fail !");
        },

        ajaxAlways : function() {
        
        },        
    	};

    	


    // $(doctransformez le en HTML grace à showdownument).ready(function(){
        app.init();
    
