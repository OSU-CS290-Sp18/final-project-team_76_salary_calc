
$(function(){


	$("#btn-cancel").click(function() {
		$('input[name="name"]').val("");
		$('input[name="position"]').val("");
		$('input[name="monthlySalary"]').val("");
		$('input[name="hourlySalary"]').val("");
	})
	$("#btn-submit").click(function() {
		var name = $('input[name="name"]').val();
		var position = $('input[name="position"]').val();
		var monthly = $('input[name="monthlySalary"]').val();
		var hourly = $('input[name="hourlySalary"]').val();
		
		if(!name) {
			alert("Please input name");
			return;
		}
		if(!position) {
			alert("Please input position");
			return;
		}

		if(!(monthly || hourly)) {
			alert("Please input salary");
			return;
		}

		var yearincome = 0;

		if(hourly) {
			yearincome = parseInt(hourly) * 40 * 52;
		} else {
			yearincome = parseInt(monthly) *12;
		}

	      $.ajax('http://localhost:3000/newsalary',{
	               data:{
	               	name: name,
	               	position: position,
	               	yearincome: yearincome
	               },
	               dataType:'json',
	               type:'POST',
	               async:'true',
	               success:function(result){
					   console.log(result)
					   alert("Add successfully.")
	               },
	               error:function(){
	                    console.log("error");
	                   }
	           });

	})
})