#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.bold.italic.magentaBright(`
        **************************************************************************************************************\n
            llllllll llllllll ll;;;,          ll    ll ll                  ll     ll;;;,      ll    ll      ll
            ll          ll    ll    ll        ll    ll ll                ll ll    ll    ll    ll    ll    ll ll
            llllll      ll    ll     ll ####  ll    ll ll       ####    ll===ll   ll     ll   llllllll   ll===ll
            ll          ll    ll    ll        ll    ll ll              ll     ll  ll    ll    ll    ll  ll     ll
            llllllll llllllll ll;;;'          llllllll llllllll       ll       ll ll;;;'      ll    ll ll       ll
            \n
        ***************************************************************************************************************`))
console.log(chalk.bold.italic.greenBright(`\n
                    ************************************************************************************
                         ll;     ;ll ll    ll llllll         ll      lllllll       ll      ll    ll
                         ll ll ll ll ll    ll ll    ))     ll ll     ll    ))     ll ll    ll  ll
                         ll  ||   ll ll    ll llllll      ll===ll    llllll      ll===ll   llll
                         ll       ll ll    ll ll    ))   ll     ll   ll  ll     ll     ll  ll  ll
                         ll       ll llllllll llllll    ll       ll  ll    ll  ll       ll ll    ll \n
                    *************************************************************************************     `       
))           

console.log(chalk.bold.redBright(`                                            ^__^
                                           ('  ') ___________
                                           { .. }{           } 
                                            '''' {___________} : 
                                                  ||        ||  :
                                                  ||        || `));


let answer = await inquirer.prompt(
    [
        {
        message:chalk.bold.italic.greenBright("Please Enter your name."),
        type:"input",
        name:"person",
        }
    ]
)
    console.log(chalk.italic.bold.cyan(`Eid Mubarak ${answer.person}`))
    let question = await inquirer.prompt(
        {
        message:chalk.bold.italic.greenBright("What are you want to doing today"),
        type:"list",
        name:"select",
        choices:[
        "Do coding",
        "Outing",
        "BBQ Party",
        "Rest"
        ]
        }
    
) 

async function greeting(){
    if (question.select === "Do coding"){
        console.log(chalk.bold.italic.yellowBright("Let some practice of typescript projects."));
    }else if (question.select === "Outing"){
        let question = await inquirer.prompt(
            {
                message:chalk.bold.italic.greenBright("Where are you want to go."),
                type:"list",
                name:"Ans",
                choices:[
                    "Meet Relatives",
                    "Sea-side",
                    "Park",
                    "Pizza hut"
                ]
            }
        )  
        
            if (question.Ans === "Meet Relatives"){
                let relative = await inquirer.prompt(
                    {
                        message:chalk.bold.italic.greenBright("In which relative house you want to go?"),
                        type:"input",
                        name:"answer"
            }
        )
        console.log(chalk.bold.italic.blueBright(`Welcome to ${relative.answer} house.`))
            }else if(question.Ans === "Sea-side"){
                console.log(chalk.bold.italic.magentaBright("I also love to go sea-side."));
            }else if(question.Ans === "Park"){
                let park = await inquirer.prompt(
                    {
                message:chalk.bold.italic.gray("In Which park you want to go?"),
                type:"list",
                name:"park",
                choices:[
                    "Safari Park",
                    "Jinnah Park",
                    "Model Park",
                    "Quaid-e-Azam Park",
                    "Nisar Shaheed Park"]
            }
        );
        console.log(chalk.bold.italic.magentaBright(`Welcome to ${park.park}.Enjoy Eid with your family.`));
        
            }else if (question.Ans === "Pizza hut"){
                console.log(chalk.bold.italic.yellowBright("Let's Go!!!!"));
            }
        }
    else if(question.select === "BBQ Party"){
    console.log(chalk.bold.italic.blueBright("Have fun and enjoy the party!!!!!!"));
    
}else if(question.select === "Rest"){
    console.log(chalk.bold.italic.redBright("Do Not Disturb"));
    
}
}



greeting()