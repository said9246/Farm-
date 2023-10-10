const express=require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");
const SignupCollection=require("./mongo");

app.use(express.urlencoded({ extended: false }))


const tem =path.join(__dirname, 'viewe');
const publicPath = path.join(__dirname, 'public');

app.set('view engine' ,'hbs');
app.set('views',tem);
app.use(express.static(publicPath))

const PORT =process.env.PORT ||5500;



app.get("/",(req,res)=>{
        res.render("home")
})



app.get("/register",(req,res)=>{
        res.render("register")
})

app.get("/web",(req,res)=>{
    res.render("web")
})


app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
})



app.post("/register",async(req,res)=>{
        const data={
            name: req.body.name,
            lname: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        }

        await SignupCollection.insertMany([data]);

        res.render("home");

});

app.post('/home', async (req, res) => {

        try {
            const check = await SignupCollection.findOne({ email: req.body.email })
    
            if (check.password === req.body.password) {
                res.status(201).render("web", { naming: `${req.body.password}+${req.body.email}` })
            }
    
            else {
                res.send("incorrect password")
            }
    
    
        } 
        
        catch (e) {
    
            res.send("wrong details")
            
    
        }
    
    
    })
