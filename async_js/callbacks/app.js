

function user_info(email,pass,callback,error){
    setTimeout(() => {
        console.log('hi all');
        if(email && pass){
            callback({
                user_mail : email,
                user_pass : pass,
    
            })
        }else {
            error('ასეთი მომხმარებელი ვერ მოიძებნა')
        }
    }, 1500)
}

user_info('nt@gmail.com', 1234, user => console.log(user),err => console.log(err)

)
