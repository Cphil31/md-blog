
"use strict";
var app = {
	
        init:function(){
            // this.getmarkdown();
            this.getJson();
            this.listeners();
        },
        
        listeners:function(){
        	$("#md").on("click",this.getmarkdown.bind(this));
        	// $("#md").on("click",this.getmarkdown.bind(this));
        },

        getmarkdown:function(){
            $.ajax("http://192.168.1.40:1337/alice.md")
            .done(this.ajaxDone)
            .fail(this.ajaxFail)
            .always(this.ajaxAlways);
        },
        ajaxDone:function(response){
            var converter = new showdown.Converter();
            var html = converter.makeHtml(response);
            
            $("#md").append(html);
            // console.log(html);
            // $("#md").html(response.menu[1].title);
        },

        ajaxFail:function() {
            alert("fail !");
        },

        ajaxAlways : function() {

        }, 

        getJson:function(){
            $.ajax("http://192.168.1.40:1337/menu.json")
            .done(this.jsonDone)
            .fail(this.jsonFail)
            .always(this.jsonAlways);
            
        },    

        jsonDone:function(foo){
          
            for (var i = 0; i < foo.menu.length; i++) {
                console.log(foo.menu[i]);
                $("#md").prepend('<li><a href="#">'+foo.menu[i].title+'</a></li>');
            }
              
          },

        jsonFail:function() {
        alert("fail !");
        },

        jsonAlways : function() {
                // alert("always !");
            },   
        };

    
        // $(doctransformez le en HTML grace à showdownument).ready(function(){
    	app.init();

