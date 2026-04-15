const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//cadastro
rl.question("Crie seu gmail: ", function(gmail) {


    rl.question("Crie sua senha: ", function(password) {


        console.log("Cadastro realizado! parabens vc conseguiu ✅");




        //login
        rl.question("Digite seu gmail: ", function(gmaillogin) {


            rl.question("Digite sua senha: ", function(passwordlogin) {


                
                
                
                
                
                if (gmaillogin === gmail && passwordlogin === password) {

                    
                    console.log("Login realizado ! 🎉");


                } else {
                   
                
                
                    console.log("gmail ou senha incoretos");
                
                
                }


                rl.close();


            });


        });


    });

});
