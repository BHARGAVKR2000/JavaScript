const posts = [
  { designation: "HR", name: "Rajesh" }, // Array of objects
  { designation: "Associate", name: "Lokesh" },
];

function getPosts() {
  setTimeout(() => {
  output = "";
  posts.forEach((post) => {
    // For Each in JavaScript
    output += `<li>${post.designation}</li>`;
  }, 1000);
  document.body.innerHTML = output;
});
}

function createPost(post){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
    if(!error){
      resolve();
    }
    else{
      reject(new Error("Something went wrong.."));
    }
    },2000);
    
  });
}

createPost({designation : "admin", name : "John"}).then(getPosts)
.catch(err => console.log(err));

