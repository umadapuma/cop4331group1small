$(document).ready(function(){    
    //for the login error: if user has incorrect username of password
    $('#loginForm').on('submit', function(event){
        
        //when user has a login error we will send the loginError.html  as a json and put in a div using ajax using
        //return jsonify({'resp': render_template('loginError.html', loginError=True)})
        //if the user logged in successfully
        //return jsonify({'resp': 'loggedIn'})
        //must 
        $.ajax({
            url:"/test",
            type: "POST",
            success: function(resp){
                if(resp.resp != "loggedIn")
                 $('div#alertDiv').html(resp.resp);
            }
        });
    });


    //for the registration error: if user has a already taken username and/or two different passwords
    $('#registrationForm').on('submit', function(event){
        
        //when user has a registration error we will send the registrationError.html as a json and put in a div using ajax using
        //return jsonify({'resp': render_template('registrationError.html', usernameTaken=True, passwordMatch=True)})
        //make sure to put the right boolean values
        //if the user registered  successfully
        //return jsonify({'resp': 'registered'})

        $.ajax({
            url:"/test",
            type: "POST",
            success: function(resp){
                if(resp.resp != "registered")
                 $('div#alertDiv').html(resp.resp);
            }
        });
    });


    $('#add_contact_submit').on('click', function(event){
        $.ajax({
            url:"/add_contact",
            type: "POST",
            data: $('#add_contact_form').serialize(),
            success: function(data){
                console.log(data);
                var new_contact = '<tr><td>' + ($('tbody').children().length + 1) + '</td><td>' + data.first_name + '</td><td>\
                ' + data.last_name + '</td><td>' + data.address1 + '</td><td>' + data.address2 + '</td><td>\
                ' + data.email + '</td><td>' + data.phone + '</td><td>' + data.city + '</td></td>' + data.zip + '</td></tr>';
                $('tbody').append(new_contact);
            }
        });
    });


});
