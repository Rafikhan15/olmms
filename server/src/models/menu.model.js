const { client } = require("../utils/dbConnect");
const { format } = require('date-fns');



// GET ALL MENU MODEL
async function allMenu(){
  try {
    const query = `select * from menus`;
  const result = await client.query(query);
  client.end;
  return { status: "success", result: result.rows };
  } catch (error) {
    return { status: "error", error: error.message };
  }
}

// POST MODEL
async function menuCreate(menu) {
    const { menuname, description, menudate, createdby } = menu;

    let newMenu = { menuname, description, menudate, createdby };
    const currentDate = format(new Date(), 'd-MMM-yyyy');
    if (menudate !== currentDate) {
        newMenu['isactive'] = false;
    } else{
        newMenu['isactive'] = true;
    }

    let insertQuery = `insert into menus(menudate, menuname, description, createdby, isactive ) 
          values('${newMenu.menudate}', '${newMenu.menuname}', '${newMenu.description}', '${newMenu.createdby}', '${newMenu.isactive}')`;
  
    try {
      const result = await client.query(insertQuery);
      client.end;
      return { status: "created", result: newMenu };
    } catch (err) {
      return { status: "creation failed", error: err.message };
    }
  }
  
  
  module.exports = {
    menuCreate,
    allMenu
  };
  