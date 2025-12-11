///BASICS///

//JAVASCRIPT==>1.SYNCHRONOUS 2.SINGLE THREADED

///---->execution one line of code at a time

//-->console.log(1)and console.log(2)

async function hello() {
  return "Hello World!";
}

hello().then(result => console.log(result));
// Output: Hello World!
