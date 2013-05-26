/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var safe = "null";
var lang = localStorage.getItem("lang");
if(lang==undefined){
	lang="en";
}


$(function() {
	$('#body').center();
	$('#loaderimage').center();
	var name = localStorage.getItem("name");
	var phone = localStorage.getItem("phone");
	var comp = localStorage.getItem("company");
	
	
	$("#language option[id="+ lang +"]").prop("selected", true);
	$('#language').selectmenu("refresh", true);
	
	$("#company option[id="+ comp +"]").prop("selected", true);
	$('#company').selectmenu("refresh", true);
	
	
	$( "#datepicker" ).datepicker();
	$("#datepicker").val($.datepicker.formatDate('dd.mm.yy', new Date()));
	$( "#photodiv" ).collapsible({ iconpos: "none" });
	
	

	
	
	
	if(name==null||phone==null||comp==null){
	
		$('#clientDetails').click();
	}
		
	$('#name').val(name);
	$('#number').val(phone);
	$("#company").val(comp);
	
	getAllProjects();
	getAllCompanies();
	getAllCategories();


});



var app = {
	// Application Constructor
	initialize : function() {
		this.bindEvents();

	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents : function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady : function() {
		//var name = window.localStorage.getItem("name");
		navigator.splashscreen.hide();
		 app.receivedEvent('deviceready');

	},
	// Update DOM on a Received Event
	receivedEvent : function(id) {
		var parentElement = document.getElementById(id);
	//	var listeningElement = parentElement.querySelector('.listening');
	//	var receivedElement = parentElement.querySelector('.received');

		//listeningElement.setAttribute('style', 'display:none;');
		//receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	}
};





$("#clientDetails").click(function() {
	
;
	$('#page1').fadeOut("fast");
	
	setTimeout(function() {
		$('#clientInfo').fadeIn("fast");
		}, 300);
	

});

$('#safe').click(function() {
	$('#card').fadeIn("fast");
	$('#content').fadeIn("fast");
	$('#page1').slideUp();
	$('#category_div').slideUp();
	$('#clientInfo').slideUp();
	safe = "true";

});

$("#unsafe").click(function() {
	$('#card').show();
	$('#content').fadeIn("fast");
	$('#page1').slideUp();
	$('#category_div').fadeIn("fast");
	$('#clientInfo').slideUp();
	safe = "false";
});

$("#submitCdetail").click(function() {



});

$("#reset").click(function() {
	$('#desc').val("");
	$('#content').fadeOut("fast");
	$('#page1').slideDown();

});
$("#send").click(function() {

});


/**
 * i18n functions
 * 
 * 
 * 
 */
//function changeLanguage(lang) {
	jQuery.i18n
			.properties({
				name : 'Messages',
				path : 'properties/',
				mode : 'both',
				language : lang,
				callback : function() {
				

					// $('#safe').attr('placeholder',
					// jQuery.i18n.prop('msg_safe'));
					//$("#safe span").text(jQuery.i18n.prop('msg_safe'));
					//$("#unsafe span").text(jQuery.i18n.prop('msg_unsafe'));
					$("#capture span").text(jQuery.i18n.prop('msg_capture_photo'));
					$("#gallery span").text(jQuery.i18n.prop('msg_gallery'));
					//$('#clientDetails').text(jQuery.i18n.prop('msg_settings'));
					//$('#submitCdetail').text(jQuery.i18n.prop('msg_submitClientDetails'));
					$('#name').attr("placeholder", jQuery.i18n.prop('msg_name'));
					$('#number').attr("placeholder",jQuery.i18n.prop('msg_number'));
					
				//$("mySelectList option[id=language]").attr("selected", "selected");
					
					$('#language option[value="1"]').text(jQuery.i18n.prop('msg_language'));
					$('#language option[value="2"]').text(jQuery.i18n.prop('msg_en_US'));
					$('#language option[value="3"]').text(jQuery.i18n.prop('msg_no_NB'));
					$('#submit').text(jQuery.i18n.prop('msg_submitClientDetails'));				
					$('#company option[value="1"]').text(jQuery.i18n.prop('msg_company'));
					$('#category option[value="1"]').text(jQuery.i18n.prop('msg_selectCategory'));
					$('#project option[value="1"]').text(jQuery.i18n.prop('msg_selectProject'));	
					$('#desc').attr("placeholder",jQuery.i18n.prop('msg_description'));
					//$('#reset span').text(jQuery.i18n.prop('msg_reset'));
					//$('#send span').text(jQuery.i18n.prop('msg_send'));
					$("#cardsuccess p").text(jQuery.i18n.prop('msg_cardsuccess'));
					$("#cardfail p").text(jQuery.i18n.prop('msg_cardfail'));
					$("#reporttype p").text(jQuery.i18n.prop('msg_report_type'));
					$("#info p").text(jQuery.i18n.prop('msg_clientinfo'));
					$("#safecard p").text(jQuery.i18n.prop('msg_safecard'));
			
				
					
					

				}
			});
//}

$('#language').change(function() {
	 var id = $(this).children(":selected").attr("id");
	 lang = id;
	 
	 localStorage.setItem("lang", lang);
	 

});

$('#company').change(function() {
	 var id = $(this).children(":selected").attr("id");
	 comp = id;
	 
	 localStorage.setItem("company", comp);
	
//alert("endret");
});

/*********************************VALIDATION NAME + NUMBER*******************************************/
$('#submitCdetail').click(function(e) {
    var isValid = true;
    
    $('.reqInput').each(function() {
        if ($.trim($(this).val()) == '') {
            isValid = false;
            
            $(this).parent().css({
                "border": "1px solid red",
                "background": "#FFCECE"
                	
            });
            //////
            $('#errortext').text("Please provide name and phone number").css('color', 'red');
            //////
        }
        else {
            $(this).parent().css({
                "border": "",
                "background": ""
            });
           
        }
    });
    
    if($('#number').val().substring(0,1)==('+')){
		var telNr = $('#number').val();
		var nullnull = "00";
		console.log($('#number').val().substring(0,1));
		telNr=telNr.replace('+','');
		telNr=nullnull+telNr;
		$('#number').val(telNr);
	}
    if($('#number').val().match(/^\d{8,12}$/)) {	
    	$(this).css({
            "border": "",
            "background": ""
        });
    }
    else {
    	isValid = false;
    	$('#number').parent().css({
            "border": "1px solid red",
            "background": "#FFCECE"
        });
    	////
    	$('#errortext').text("Please provide a valid phone number").css('color', 'red');
    	////
    }
    
    if (isValid == false) {
        e.preventDefault();	
      
    }else{

    	localStorage.setItem("name", $('#name').val());
    	localStorage.setItem("phone", $('#number').val());
    	localStorage.setItem("company", $('#company').val());
    	
    	if(lang != localStorage.getItem("lang")){
    	//alert("local" + localStorage.getItem("lang"));
    	//alert("lang" + lang);
    	lang = localStorage.getItem("lang");
    	
    		location.reload();
    	}
    	
    	
    	
    	 $('#errortext').text("");
    	
    	$('#clientInfo').fadeOut("fast");
    	
    	setTimeout(function() {
    		$('#page1').fadeIn("fast");
    		}, 300);
    	
    	
    	
    	
    	
    	
    	//$('#clientInfo').hide();
    	//$('#clientDetails').show();
    	//$('#page1').show();
    }
});


/*********************************VALIDATION desc lenght*******************************************
 * 
 * 
 */

$('#send').click(function(e) {
    var isValid = true;
    
    $('.reqInputdesc').each(function() {
        if ($.trim($(this).val()) == '') {
            isValid = false;
          
            $(this).css({
                "border": "1px solid red",
                "background": "#FFCECE"
                	
            });
        }
        else {
            $(this).css({
                "border": "",
                "background": ""
                	
            
            });
        }
    });
    
    var desText = $('#desc').val();
    //console.log(desText.length);
    if(desText.length > 240){
    	console.log(desText.length);
    	isValid = false;
    	$('#desc').css({
            "border": "1px solid red",
            "background": "#FFCECE"
        });
    }
    else {
        $(this).css({
            "border": "",
            "background": ""
        });
    }


    
    if (isValid == false) {
        e.preventDefault();	
    }else{
    	$('#loaderimage').fadeIn("fast");
		$('#all').fadeOut("fast");
    	addSafecard(safe);
    	safe = null;

       
    }
});



////////////
//effects
//////

$('#photodiv').bind('expand', function () {
    $(this).children().slideDown(500);
}).bind('collapse', function () {
    $(this).children().next().slideUp(500);
});


jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
};
