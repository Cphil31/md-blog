
"use strict";
var app = {
	
		init:function(){
            // let's go
            this.listeners();
        },
        listeners:function(){
        	$("#recup").on("click",this.getmarkdown.bind(this));
        	$("#recup2").on("click",this.getJson.bind(this));
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
            
            $("#md").html(html);
            console.log(html);
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

        jsonDone:function(){
          $.get("http://192.168.1.40:1337/menu.json",function(foo){
            for (var i = 0; i < foo.menu.length; i++) {
                console.log(foo.menu[i].title);
            $("#md").append(<a href=> foo.menu[i].title   </a>);
           



            }


          })              
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

