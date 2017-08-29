//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //to access the context of the function

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //Rule #1: Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.
      //Rule #2:  Whenever a function is called by a preceding dot, the object before that dot is this.
      //Rule #3:  Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
      //Rule #4:  Whenever JavaScript’s call or apply method is used, this is explicitly defined.
      //REFERENCE:  https://john-dugan.com/this-in-javascript/

  // 3) What is the difference between call and apply?

      //Answer
      //call is just invoked, and NO new funtion is created, The call() method calls a function with a given this value and arguments provided INDIVIDUALLY
     //The apply() method calls a function with a given this value, and arguments provided as an ARRAY
  // 4) What does .bind do?

      //Answer
      //The bind() method creates A NEW FUNCTION that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.  Calling f.bind(someObject) creates a new function with the same body and scope as f, but where this occurs in the original function, in the new function it is permanently bound to the first argument of bind, regardless of how the function is being used.
      //takes a function and binds it to a context you give it.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user =
      {
        username: 'jacobleatherwood',
        email:  'jacobleatherwood@email.com',
        getUsername : function() {
          return this.username;
        }
      }
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.
function Car (make, model, year){
  this.make = make
  this.model = model
  this.year = year
  this.move = 0
  this.moveCar = function(){
    return this.move += 10
  }
}
  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).


prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.call(prius);
getYear.call(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com',
};

var getMyUsername = function() {
 return this.username;
}


var userName = getMyUsername.call(myUser);
console.log(userName)//Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
//undefined
//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
//the scope of the function

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
