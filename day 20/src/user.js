const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "WebTech",
  password: "cdac",
  database: "project2",
};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  console.log("Connection Successfully");

  await connection.endAsync();
}

//connectionCheck();

//function 1
async function addUser(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `insert into user1(username,password) values (?,?)`; //be carefull about tablename
  await connection.queryAsync(sql, [user.username, user.password]);
  console.log("Connection Successfully");

  await connection.endAsync();
}

const user = { username: "MSD", password: "MSD@123" };

addUser(user);

//function 2
async function selectUser(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `select * from user1`; //be carefull about tablename
  const list = await connection.queryAsync(sql, []);
  console.log("Connection Successfully");

  await connection.endAsync();
  console.log(list);
  return list;
}

//selectUser();

module.exports = { selectUser, addUser };
