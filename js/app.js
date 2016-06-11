$(document).ready(function(){

// Add new item
$("img.add").on("click", function() {
	addItem();
});

// Cross off clicked item
$('.list').on('click','li .fa-check',function() {
	$(this).parent().toggleClass('checked');
});

// Delete checked Items
$('img.delete').click(function() {
	$('li.checked').remove();
});

// Use Enter key to add item
$('.input').keydown(function(e){
	if(e.which == 13){
		addItem();
}});
});


function addItem() {
	if($('.input').val().trim()!=""){


		$('ul.list').prepend('<li><i class="fa fa-check"></i>'+ $('.input').val() +' </li>');
		$('.input').val('');
	}
}





