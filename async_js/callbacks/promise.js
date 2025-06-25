//new Date, new Math

/* const promise = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve({
            user_name : 'Ana'
        })
        reject('ასეთი მომხმარებელი ვერ მოიძებნა')
    },1500)

})

promise
.then(user => {
    console.log(user);
})

.catch(err => {
    console.log(err);
}) */


function user_info(email, pass) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('hi all');
            if (email && pass) {
                resolve({
                    user_mail: email,
                    user_pass: pass
                });
            } else {
                reject('ასეთი მომხმარებელი ვერ მოიძებნა');
            }
        }, 1500);
    });
}

user_info('nt@gmail.com', 1234)
    .then(user => {
        console.log(user);
    })
    .catch(err => {
        console.log(err);
    });



async function full_user_info() {
    const userInfo = await user_info('nt@gmail.com', 1234)
    console.log(userInfo);
    
    }

    full_user_info()