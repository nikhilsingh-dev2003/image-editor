//form mea email or name valid ka liye use hoga

let form=document.querySelector("form");
let nm=document.querySelector("#name");
form.addEventListener("submit",function(detils){
    detils.preventDefault();
    if(nm.value.length<=2){
        document.querySelector("#hide").style.display="initial";
    }
    else{
        document.querySelector("#hide").style.display="none";
    }

let regex=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

let ans=regex.test("nilkhil@gmail.com");
console.log(ans);
})


// async ka example hea

function profileLakerAao(username,cb) {
    console.log("Fatching profile data...");
    
    
    setTimeout(() => {
        cb({  _id:1234,username, age:26, email:"nike@gmail.com"});
        
    }, 2000);
    
}


function saarePostLakarAao(id,cd){
    console.log("Fatching all posts...");
    
    setTimeout(() => {
        cd({_id:id,posts:["hey","hello","good morning"]})
    }, 3000);
}

function savedPostsNikaalo(id,cb){
    console.log("fatching saved posts...");
    
    setTimeout(() => {
        cb({_id:id,saved:[1,2,3,4,]})
    }, 3000);
}


profileLakerAao("harsh",function(data){
    console.log(data);
    saarePostLakarAao(data._id, function(posts){
        console.log(posts);
        savedPostsNikaalo(data._id,function(saved){
console.log(saved);

        })
        
    })
    
});

// fatch api in js

fetch("https://randomuser.me/api/")
.then((raw)=>raw.json())
.then((data)=>console.log(data.results[0].name))

// function factry 

function creatProducrt(name,price){
  let stoke=10;
  return{
    name,
    price,
    checkStoke(){
      console.log(stoke);
      

    },
    buy(qty){
      if(qty<=stoke){
        stoke-=qty;
        console.log(`${qty} pieces booked - ${stoke} pieces left.`); 
      }
      else{
        console.error(`we only have ${stoke} pieces left`);
        
      }
    },
    refill(qty){
      stoke+=qty;
      console.log(`reflled the stoke - ${stoke} pieces now.`);
      
    },
  }
}
let iphone=creatProducrt("iPhone",7000);
let kitkat=creatProducrt("kitkat",10)
iphone.buy(6);


// Interview
async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

geytUsers();


// Post data to sarver
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello",
    body: "This is post data",
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

