const { client } = require("../utils/dbConnect");

// GET ALL LunchChoice MODEL
async function allLunchChoice(){
    try {
    menunameQuery = `select * from menus where ` 
    const query = `select * from lunchchoice`;
    const result = await client.query(query);
    client.end;
    return { status: "success", result: result.rows };
    } catch (error) {
      return { status: "error", error: error.message };
    }
  }

// POST MODEL
async function lunchChoiceCreate(lunchChoice) {
    const { userid, menuid } = lunchChoice;
  
    const checkQuery = `select * from lunchchoice where menuid = '${menuid}'`;
    const checkResult = await client.query(checkQuery);
  
    if (checkResult.rows.length > 0) {
      return { status: "creation failed", error: "Already added this menu item" };
    }

    try {

        const userQuery = await client.query(`select username from users where id = '${userid}'`);
        const username = userQuery.rows[0].username;
        const menuQuery = await client.query(`select menuname from menus where id = '${menuid}'`);
        const menuname = menuQuery.rows[0].menuname;
        console.log(menuname);

        const newLunchChoice = { userid, username, menuid, menuname };
        const insertQuery = `
            INSERT INTO lunchchoice(userid,username, menuid, menuname)
            values('${userid}','${username}', '${menuid}', '${menuname}')`;
        const result = await client.query(insertQuery);
        return { status: 'created', result: newLunchChoice };
    } catch (err) {
        return { status: 'creation failed', error: err.message };
    } 
  }
  

  module.exports = {
    lunchChoiceCreate,
    allLunchChoice
  }