function sendEmail() {
   
    var name=$('#name').val()
    /*if(name==''){
        alert('Please enter your name')
        return
    }*/
    name="Enquiry from "+name;
    var email=$('#email').val()
    /*if(email==''){
        alert('Please enter your email');
        return
    }*/
    name="Enquiry from "+name+"-"+email;
    var message=$('#message').val()
    /*if(message===''){
        alert('Please enter a message');
        return
    }*/

alert(email)
    Email.send({
    Host: "smtpout.secureserver.net",
    Username : "info@statotechsolutions.com.au",
    Password : "Discover39",
    To : 'thota4sarayu@gmail.com',
    From:"info@statotechsolutions.com.au",
    Subject :name,
    Body : message,
    }).then(
          message => console.log("Email Sent Successfully:"+message)
    );
}