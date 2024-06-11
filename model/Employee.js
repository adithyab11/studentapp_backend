const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "empid":String,
        "empname":String,
        "empdob":String,
        "empemail":String
    }
)

let employeemodel=mongoose.model("employees",schema)
module.exports={employeemodel}