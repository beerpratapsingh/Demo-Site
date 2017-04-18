$(document).ready(function(){
	$("#list > li").hide();
	function appendTaskToList(val) {
	    $('#list').append("<li>" + val + "  <a href='javascript:void(0);' class='close-btn'>Remove List</a></li>");
	}

	if (localStorage['tasks']) {
	    var tasks = JSON.parse(localStorage['tasks']);	    
	}else {		
	    var tasks = [];
	}
	for(var i=0;i<tasks.length;i++) {
	    appendTaskToList(tasks[i]);
	}

	var addTask = function(){
    // get value from #name input
	    var val = $('#titleInput').val(),
	        urlVal = $("#urlInput").val(),
	        tagVal = $("#TagInput").val();

	        var totalVal = (val +" "+ urlVal +" "+ tagVal);
	    // add the task to the array
	    tasks.push(totalVal);	    
	    // save to local storage
	    localStorage["tasks"] = JSON.stringify(tasks);	    
	    // append the name to the list
	    appendTaskToList(totalVal);	    
	    // reset the input field and focus it.
	    /*$('#name').val("").focus();*/
	}

	$('#add-btn').click(addTask);
	$('#titleInput, #urlInput, #TagInput').keyup(function(e){
	    if (e.keyCode === 13) {
	        addTask();
	    }
	});

	$('.close-btn').on( 'click', function() {		
	  $(this).parent('li').fadeOut();
	  
	  //Clear Local Storage
	  /*localStorage.clear*/
	}); 


	//Filter code
	$(function(){
	    $('#mySearchInput').keyup(function(){	    		       
	        var searchText = $(this).val();	        
	        $('#list > li').each(function(){	            
	            var currentLiText = $(this).text(),
	                showCurrentLi = currentLiText.indexOf(searchText) !== -1;	            
	            	$(this).toggle(showCurrentLi);	            
	        });     
	    });

	});	

});