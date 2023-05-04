var person = {
    account: []
};
person.account.push({email: 'Example@email.com', password: '12345678' })
var json = JSON.stringify(person);
var fs = require('fs');
function WriteTO(){
    fs.writeFile('jsonfile.json', json, 'utf8', callback);
}
