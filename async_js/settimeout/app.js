console.log('hello');

setTimeout(() => {
    console.log('how are you?');
    
}, 1000)

console.log('bye');

setInterval(() => {
    console.log('I am fine');
    
}, 10000 );



function getRecipes () {
    setTimeout(() => {
        console.log('hi all');
        const recipe_id = [1,2,3,4,5];
        console.log(recipe_id);
        


        setTimeout((id) => {
            const recipe_authors = {
                author : 'Ana todua',
                recipe : 'fresh juice'
            }
            console.log(recipe_authors);
            console.log(`${recipe_authors.author}'s id is ${id}`);
            

            setTimeout((author)=> {
                const recipeAuthors = {
                    author : author,
                    recipe : 'hot chocolate',
                }
                console.log(recipeAuthors);
                console.log(`${recipeAuthors.recipe} is also made by ${recipe_authors.author}`);
                
            }, 4500, recipe_authors.author)
        }, 1500, recipe_id[2])
    }, 2500);
}


getRecipes()