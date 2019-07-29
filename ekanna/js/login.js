
function login()
{
	var country = document.getElementById("country").value;
	var phone_number = document.getElementById("phone_number").value;

	console.log(country);
	console.log(phone_number);

	var login_url = base_url + 'login';
	var data =  {
				  "phone_number": phone_number,
				  "country_code": "IND"
				}

	$.post(login_url, data, function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
        var toastHTML = "";
        if (status) {
        	console.log('MAIL SENT');
        	toastHTML = '<span>MAIL SENT SUCCESS</span><button class="btn-flat toast-action">OK</button>';
        }
        else
        {
        	console.log('FAILED! Please try again.');
        	toastHTML = '<span>FAIL: Try Again</span><button class="btn-flat toast-action">OK</button>';
        }
        M.toast({html: toastHTML});
    });
}



$(document).ready(function(){
    $('select').formSelect();
  });
      