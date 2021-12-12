const fs = require('fs');

fs.readdir('one', (err, data) =>{
    console.log(data);
    data.map(file => console.log(file));
})