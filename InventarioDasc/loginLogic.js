$(document).ready(function() {


$('#login-form').submit(function (e){
  const postData = {
    username: $('#username').val(),
    password: $('#password').val()
  };
  $.post('PHP/login.php',postData,function(response){
      console.log(response);
  });
  
});


});