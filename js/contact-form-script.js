$("#contactForm").validator().on("submit", function(event) {
  if (event.isDefaultPrevented()) {
    // handle the invalid form...
    formError();
    submitMSG(false, "Você preencheu o formulário corretamente?");
  } else {
    // everything looks good!
    event.preventDefault();
    submitForm();
  }
});


function submitForm() {
  // Initiate Variables With Form Content
  var name = $("#name").val();
  var email = $("#email").val();
  var msg_subject = $("#msg_subject").val();
  var message = $("#message").val();


  $.ajax({
    type: "POST",
    url: "assets/php/form-process.php",
    data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
    success: function(text) {
      if (text == "success") {
        formSuccess();
      } else {
        formError();
        submitMSG(false, text);
      }
    }
  });
}

function formSuccess() {
  $("#contactForm")[0].reset();
  submitMSG(true, "Mensagem Enviada!")
}

function formError() {
  $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass();
  });
}

function submitMSG(valid, msg) {
  if (valid) {
    var msgClasses = "h3 text-center tada animated text-warning";
  } else {
    var msgClasses = "h3 text-center text-warning";
  }
  $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
