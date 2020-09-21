function sendEmail() {

    var name=$('#name').val()
    name="Enquiry from "+name;
    var email=$('#email').val()
    name="Enquiry from "+name+"-"+email;
    var message=$('#message').val()


    Email.send({
    Host: "smtpout.secureserver.net",
    Username : "info@statotechsolutions.com.au",
    Password : "Discover39",
    To : 'thota4sarayu@gmail.com',
    From:"info@statotechsolutions.com.au",
    Subject :name,
    Body : message,
    }).then(
          message => alert("Message Status:"+message)
    );
}