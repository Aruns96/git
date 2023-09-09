const posts = [
    {title : "post1" , body : "this is post 1" ,lastactivitytime : new Date().getTime()},
    {title : "post2" , body : "this is post 2" ,lastactivitytime : new Date().getTime()}
]
function getPosts(){
setTimeout(()=>{
    let output = "";

    posts.forEach(
        (post)=>{
            output += `<li>${post.title} -last updated ${(new Date().getTime() - post.lastactivitytime)/1000} seconds ago</li>`;
        }
    );
document.body.innerHTML=output;
},1000
)

}


function createPost(post){
    return  new Promise((resolve,reject)=>{
        setTimeout(() => {
             posts.push({...post,lastactivitytime : new Date().getTime()});
             const err = false;
             if(!err){
                resolve("posted");
             }else{
                reject("error:something went wrong");
             }
             
            },2000
          )
    } )
  
}

function deletePost(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(posts.length !==0){
            resolve(posts.pop())
        }
        else{
            reject("no items to delete")
        }

       },2000)
    })
}


function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          posts.lastactivitytime = new Date().getTime();
          resolve(posts.lastactivitytime)
        },1000)
    })
}

// Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
// .then(getPosts)
// .catch(err => console.log(err))
// .then(deletePost)
// .catch(err => console.log(err))


async function showItmes(){
    let m1 = await createPost({title: 'Post Five', body: 'This is Post Five'});
    console.log(m1);
    getPosts();
    let m2 = await deletePost();
    console.log(m2)
}
showItmes();

//tickets booking

async function bookMovie(){
const wifebringtickets = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("tickets")
    },3000)
})

let ticket = await wifebringtickets;
console.log(`i have ${ticket}`)

const getpopcorn = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("popcorn")
    },3000)
})

let popcorn = await getpopcorn;
console.log(`get me some  ${popcorn}`)

const getbutter = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("butter")
    },3000)
})

let butter = await getbutter;
console.log(`get  some  ${butter} on top`)

const getcolddrinks = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("cold drink")
    },3000)
})

let cooldrink = await getcolddrinks;
console.log(`get  some  ${cooldrink} also`)


return ticket;




}
bookMovie().then((m)=>{console.log(m)})


