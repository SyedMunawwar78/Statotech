function sendEmail() {
   
    var name=$('#name').val()
    
    if(name==''){
        $('.name-message').removeClass('alert-display')
        return
        
    }else{
        $('.name-message').addClass('alert-display')
    }
    name="Enquiry from "+name;
    var email=$('#email').val()
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    if(email==''){
        $('.email-message').removeClass('alert-display')
        return
    }else{
        $('.email-message').addClass('alert-display')

    }
    if(!pattern.test(email)){
        $('.email-perfect').removeClass('alert-display')
        return
    }else{
        $('.email-perfect').addClass('alert-display')
    }
    name="Enquiry from "+name+"-"+email;
    var message=$('#message').val()
    if(message===''){
        $('.area-message').removeClass('alert-display')
        return
    }else{
        $('.area-message').addClass('alert-display')
    }

    Email.send({
    Host: "smtpout.secureserver.net",
    Username : "info@statotechsolutions.com.au",
    Password : "Discover39",
    To : 'thota4sarayu@gmail.com',
    From:"info@statotechsolutions.com.au",
    Subject :name,
    Body : message,
    }).then(
          message => $('.success-message').removeClass('alert-display')
    );
}