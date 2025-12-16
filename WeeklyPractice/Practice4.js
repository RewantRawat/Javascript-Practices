function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit(amount) {
            balance += amount;
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient funds");
                return;
            }
            balance -= amount;
        },
        getBalance() {
            return balance;
        }
    };
}

// const account = createBankAccount(1000)
// account.deposit(500)
// account.withdraw(200)
// console.log(account.getBalance());


// function create(initalblc) {
//     let ballance = initalblc

//     return {
//         deposit(amt) {
//             ballance += amt
//         },
//         withdraw(amt) {
//             if (amt > ballance) {
//                 console.log("insufficient ballance");
//                 return

//             }
//             ballance -= amt
//         },
//         getballance(){
//             return ballance
//         }
//     }
// }

// const act = create(2000)
// act.deposit(200)
// act.withdraw(250)
// console.log(act.getballance());


///EVENT LOOP///
console.log(1);

setTimeout(()=>console.log(2)
)

Promise.resolve().then(()=>console.log(3)
)
queueMicrotask(() => console.log(4));
console.log(5);


function debounce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer=setTimeout(()=>fn(...args),delay)
    }
}

const searchApi = (query)=>{
    console.log("fetching eesult for",query);
    
}

const debounceSearch = debounce(searchApi,500)

debounceSearch("R");
debounceSearch("Re");
debounceSearch("Rea");
debounceSearch("React");

///INFINITE SCROOLL LOGIC (USED INSTAGRAM,LINKEDIN ETCC)////

let page =1
function loadMoreData(){
    console.log("Fetching page",page);
    page++
    
}
window.addEventListener("scroll",()=>{
    if(
       window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 10
    ){
    loadMoreData();
  }
})