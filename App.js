const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(express.json())
mongoose.connect("mongodb+srv://Adithyab:8281041547@cluster0.uhvrb.mongodb.net/employeeDB?retryWrites=true&w=majority&appName=Cluster0")




app.use(cors())


const {employee, employeemodel}=require("./model/Employee")

app.post("/add",(req,res)=>{
    let input=req.body
    let employee=new employeemodel(input)
    employee.save()
    console.log(employee)
    res.send("test")
    res.json({"employee":"success"})

}
)

app.get("/search",(req,res)=>{
    res.send("search")
})

app.get("/delete",(req,res)=>{
    res.send("delete")
})

app.post("/view",(req,res)=>{
    employeemodel.find().then(
        (data)=>{
            res.json(data)

        }
    ).catch(
        (error)=>{
            res.json(error)
        }

    )
   
})

app.listen(8907,()=>{
    console.log("server started")
})