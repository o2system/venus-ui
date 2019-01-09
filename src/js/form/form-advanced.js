import 'select2';
import 'bootstrap-tagsinput';
import 'bootstrap-select';
import 'bootstrap-filestyle2';
import 'selectize';
import Switchery from 'switchery';

$('[data-plugin="switchery"]').each(function (idx, obj) {
    new Switchery($(this)[0], $(this).data());
});

$(document).ready(function () {
    // Select2
    $(".select2").select2();

    $('.selectpicker').selectpicker();

    $(":file").filestyle({input: false});

    $('.selectize-tags').selectize({
	    delimiter: ',',
	    persist: false,
	    create: (input) => {
	        return {
	            value: input,
	            text: input
	        }
	    }
	});

	$('.selectize-single').selectize({
	    create: true,
	    sortField: 'text'
	});

	$('.selectize-opt').selectize({
	    sortField: 'text'
	});
});