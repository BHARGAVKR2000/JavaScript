const company = [
    { designation: "HR", name: "Rajesh" }, // Array of objects
    { designation: "Associate", name: "Lokesj" },
  ];
  
  function getDesignation() {
      setTimeout(() => {
      output = "";
      company.forEach((post, index) => {
        // For Each in JavaScript
        output += `<li>${index} ${post.designation}</li>`;
      }, 1000);
      document.body.innerHTML = output;
    });
  }
  
  function createPost(post, callback) {
    setTimeout(() => {
      company.push(post);
      callback();
    }, 2000);
  }
  
  createPost({ designation: "DB Admin", name: "Ramesh" }, getDesignation);