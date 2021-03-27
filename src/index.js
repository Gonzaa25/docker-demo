const app = require('express')()

app.get('/',(req,res)=>{
   res.json({message:`Estas usando Docker! ✋`});
});

const port = process.env.PORT || 8080;

app.listen(port,()=>console.log(`Servidor corriendo en http://localhost:${port}`));