const accountId = 144553
let accountEmail = "inam@google.com"
var accountPassword = "12345"
accountCity = "Mianwali"
let accountState;

// accountId = 2 // Not allowed bcz const is not change.

accountEmail = "matti@google.com"
accountPassword = "54321"
accountCity = "Harnoli"

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])