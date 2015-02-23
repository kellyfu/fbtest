FB.init({
	     appId: '303348743168816',
	     status: true,
	     cookie: true,
	     xfbml: true,
	     oauth: true,

	});
 function getLoginState(){

 	document.getElementById("target").innerHTML = "you click !";
	FB.getLoginStatus(function (response) {
		if (response.status === 'connected') {       
		var uid = response.authResponse.userID;
		//login_success(uid);
	} else {
		FB.login(function (response) {
			if (response.authResponse) {
			var uid = response.authResponse.userID;
			var accessToken = response.authResponse.accessToken;
			login_success(uid);
		} 	else {
			alert('登入失敗!');
			}
		}, {
		scope: 'email,publish_stream'
		});
		}
	})

}