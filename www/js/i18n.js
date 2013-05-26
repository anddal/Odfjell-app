/*
/**
 * i18n functions
 * 
 * 
 * 
 */

/*
function changeLanguage(lang) {
	jQuery.i18n
			.properties({
				name : 'Messages',
				path : 'properties/',
				mode : 'both',
				language : lang,
				callback : function() {

					// $('#safe').attr('placeholder',
					// jQuery.i18n.prop('msg_safe'));
					$("#safe span").text(jQuery.i18n.prop('msg_safe'));
					$("#unsafe span").text(jQuery.i18n.prop('msg_unsafe'));
					$('#clientDetails').html(jQuery.i18n.prop('msg_settings'));
					$('#name')
							.attr("placeholder", jQuery.i18n.prop('msg_name'));
					$('#number').attr("placeholder",
							jQuery.i18n.prop('msg_number'));
					$('#language option[value="1"]').text(
							jQuery.i18n.prop('msg_language'));
					$('#language option[value="2"]').text(
							jQuery.i18n.prop('msg_en_US'));
					$('#language option[value="3"]').text(
							jQuery.i18n.prop('msg_no_NB'));
					// $('#company').append($("<option disabled selected
					// />").text(jQuery.i18n.prop('msg_company')));
					$('#submit').html(
							jQuery.i18n.prop('msg_submitClientDetails'));
					// $('#project').append($("<option disabled selected
					// />").text(jQuery.i18n.prop('msg_selectProject')));
					$('#category').append(
							$("<option disabled selected />").text(
									jQuery.i18n.prop('msg_selectCategory')));
					$('#desc').attr("placeholder",
							jQuery.i18n.prop('msg_description'));
					$('#reset span').text(jQuery.i18n.prop('msg_reset'));
					$('#send span').text(jQuery.i18n.prop('msg_send'));

					// $('#company
					// option[value="1"]').text(jQuery.i18n.prop('msg_company'));
					$('#category option[value="1"]').text(
							jQuery.i18n.prop('msg_selectCategory'));
					$('#project option[value="1"]').text(
							jQuery.i18n.prop('msg_selectProject'));
					// $('#company option').eq(1).attr('selected', 'selected');

				}
			});
}

$('#language').change(function() {

	var lang = $(this).children(":selected").attr("id");

	changeLanguage(lang);
	$(".knapp").button("refresh");
	//$(".dropdown").selectmenu( "refresh" );

});
*/