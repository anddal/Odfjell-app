//var insertCompanyURL = "http://oddidodd.jelastic.elastx.net/HMS_odfjell/ajax/addCompany";
var insertSafecardURL = "http://hmsodfjell.jelastic.elastx.net/HMS_odfjell/ajax/addSafecard";
var companiesURL = "http://hmsodfjell.jelastic.elastx.net/HMS_odfjell/ajax/getAllCompanies";
var allProjectsURL = "http://hmsodfjell.jelastic.elastx.net/HMS_odfjell/ajax/getAllProjects";
var allCategoriesURL = "http://hmsodfjell.jelastic.elastx.net/HMS_odfjell/ajax/getAllCategories";

//var insertCompanyURL = "http://oddidodd.jelastic.elastx.net/HMS_odfjell/ajax/addCompany";
//var insertSafecardURL = "http://158.37.226.104:8080/HMS_odfjell/ajax/addSafecard";
//var companiesURL = "http://158.37.226.104:8080/HMS_odfjell/ajax/getAllCompanies";
//var allProjectsURL = "http://158.37.226.104:8080/HMS_odfjell/ajax/getAllProjects";
//var allCategoriesURL = "http://158.37.226.104:8080/HMS_odfjell/ajax/getAllCategories";
//TODO implement
function addSafecard(safe) {
	var observername = $('#name').val();
	var observernumber = $('#number').val();
	var observerlanguage = $('#language option:selected').val();
	var observerfirm = localStorage.getItem("company"); //$('#company option:selected').val();
	var date = $('#datepicker').val();
	var projectid = $('#company option:selected').val();
	var safe = safe;
	var registered = "false";
	var category = $('#category option:selected').val();
	var description = $('#desc').val();
	var photo = $('#newName').val();

	var obj = {
		"safecard.observername" : observername,
		"safecard.observernumber" : observernumber,
		"safecard.observerlanguage" : observerlanguage,
		"safecard.observerfirm" : observerfirm,
		"safecard.date" : date,
		"safecard.projectid" : projectid,
		"safecard.safe" : safe,
		"safecard.registered" : registered,
		"safecard.category" : category,
		"safecard.description" : description,
		"safecard.photo" : photo,

	};
//alert(observerfirm);
	data = $.param(obj);
	sendPost(data, insertSafecardURL, insertCompanySuccess, tableError);

};

function insertCompany() {
	var companyname = $('#name').val();
	var companyactive = "false";

	//	if( ($('#companyname').is(':checked'))) {
	//		companyactive = "true";//$('input[name=companyactive]:checkbox:checked').val();
	//	} 

	console.log("companyname: " + companyname);
	console.log("companyactive: " + companyactive);

	var obj = {
		"company.companyname" : companyname,
		"company.companyname" : companyactive,
	};

	data = $.param(obj);
	sendPost(data, insertCompanyURL, insertCompanySuccess, tableError);

}

function insertCompanySuccess() {
	
	$('#loaderimage').fadeOut("fast");
	
	$('#cardsuccess').show();
	setTimeout(function() {
		
		
		$('#cardsuccess').hide();
		
		$('#all').fadeIn("slow");
		$('#card').hide();
		$('#page1').show();
		$('#reset').click();
		}, 3000);	
	
}

function tableError() {
	$('#loaderimage').fadeOut("fast");
	
	$('#cardfail').show();
	setTimeout(function() {
		
		
		$('#cardsuccess').hide();
		
		$('#all').fadeIn("slow");
		$('#card').hide();
		$('#page1').show();
		$('#reset').click();
		}, 3000);	
}

function sendPost(data, URL, successFunc, errorFunc) {
	$.ajax({
		type : 'Post',
		url : URL,
		data : data,
		success : successFunc,
		error : errorFunc
	});
}



function sendGet(data, URL, successFunc, errorFunc) {

	$.ajax({
		type : 'GET',
		url : URL,
		data : data,
		dataType : "json", // data type of response
		success : successFunc,
		error : errorFunc
	});
}

function getAllProjects() {
	sendGet("", allProjectsURL, appendProject, getAllRevealError);
}

function getAllCategories() {
	//sendGet("", allCategoriesURL, appendCategory, getAllRevealError);
}

function appendCategory(data) {
$("#category").empty();

	var list = data == null ? [] : (data instanceof Array ? data : [ data ]);
	if (list == null) {
		console.log('list == null');
	} else {
		console.log(list.length);

		if (list.length == 0) {
		}
		;
	}

	var options = $("#category");
	$.each(list, function(index, category) {

		options.append($('<option />').val(this.id).text(this.name));

	});
};

function appendProject(data) {
	var list = data == null ? [] : (data instanceof Array ? data : [ data ]);
	if (list == null) {
		console.log('list == null');
	} else {
		console.log(list.length);

		if (list.length == 0) {
		}
		;
	}

	var options = $("#project");
	$.each(list, function(index, project) {
	
	if (project.active == "true") {
		options.append($('<option />').val(this.id).text(this.name));
}
	});
};

function getAllRevealError(request, status, error) {
	console.log('Beklager! Kunne ikke sende sms. Error: ' + error
			+ '  status: ' + status);
}

function getAllCompanies() {
	sendGet("", companiesURL, appendCompany, getAllRevealError);
}

function appendCompany(data) {
	
	var list = data == null ? [] : (data instanceof Array ? data : [ data ]);
	if (list == null) {
		console.log('list == null');
	} else {
		console.log(list.length);

		if (list.length == 0) {
		}
		;
	}

	var options = $("#company");
	$.each(list, function(index, company) {

		if (company.active == "true") {
			options.append($('<option />').val(this.id).text(this.name));
		}

	});
};

	$("#project").change(function(){
	
		var id = $("#project").val();
		
		var url = "http://hmsodfjell.jelastic.elastx.net/HMS_odfjell/ajax/getCategoriesForProject";
		pID = id;
		var obj = {"projectId" : id};
		
		console.log(id);
		data = $.param(obj);
		sendGet(data, url, appendCategory, getAllRevealError);
	});
