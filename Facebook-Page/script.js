$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            surname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                minlength:6
            },
            day:{
                required:true
            },
            genderType:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"Enter atleast 4 characters"
            }
        }
        
    })
})