function show_otp_input()
{
	document.getElementById("otp_input").innerHTML = 
	'<div class="input-field col s9"><input placeholder="123456" id="otp" type="text" class="validate" required><label for="otp">OTP</label></div>';
}

function login()
{
	var country = document.getElementById("country").value;
	var phone_number = document.getElementById("phone_number").value;
	var otp = document.getElementById("otp");

	var login_url = base_url + 'user/login';
	
	console.log(otp);

	if(otp == null){
		var payload =  {
					  "phone_number": phone_number,
					  "country_code": "IND"
					};
		send_otp(login_url, payload)
	}
	else{
		var payload =  {
					  "phone_number": phone_number,
					  "country_code": "IND",
					  "otp":otp.value
					};
		verify_otp(login_url, payload)
	}

	
}

function send_otp(login_url, payload) {

	var response = document.getElementById('login_responce');
	response.innerHTML = ''

	$.ajax({
	  url:login_url,
	  type:"POST",
	  data:JSON.stringify(payload),
	  contentType:"application/json; charset=utf-8",
	  dataType:"json",
	  success: function(result,status,xhr){
	  	show_otp_input();
	    console.log(xhr.responseJSON);
	    response.innerHTML = '<font color="green">'+
	  	                     xhr.responseJSON['message']
	  	                     +'</font>';
	  	document.getElementById('test_otp').innerHTML = xhr.responseJSON['otp'];
	  },
	  error: function(xhr,status,error){
	  	response.innerHTML = '<font color="red">'+
	  	                     xhr.responseJSON['message']
	  	                     +'</font>';
	  }
	})
}

function verify_otp(login_url, payload) {

	var response = document.getElementById('login_responce');
	response.innerHTML = ''
	document.getElementById('test_otp').innerHTML = '';

	$.ajax({
	  url:login_url,
	  type:"POST",
	  data:JSON.stringify(payload),
	  contentType:"application/json; charset=utf-8",
	  dataType:"json",
	  success: function(result,status,xhr){
	    console.log(xhr.responseJSON);
	    response.innerHTML = '<font color="green">'+
	  	                     xhr.responseJSON['message']
	  	                     +'</font>';
	  	document.getElementById('test_otp').innerHTML = xhr.responseJSON['authorization'];
	  },
	  error: function(xhr,status,error){
	  	response.innerHTML = '<font color="red">'+
	  	                     xhr.responseJSON['message']
	  	                     +'</font>';
	  }
	})
}



$(document).ready(function(){
    $('select').formSelect();
  });
      