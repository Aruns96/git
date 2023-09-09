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
                resolve();
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

Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
.then(getPosts)
.catch(err => console.log(err))
.then(deletePost)
.catch(err => console.log(err))


