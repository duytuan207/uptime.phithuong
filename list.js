const Database = require("@replit/database");
const db = new Database();
db.get('urls').then(urls => {
  console.log(urls)
  console.log('Tổng:', urls.length)
});
