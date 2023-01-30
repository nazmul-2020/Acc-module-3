let count = 0;
const viewCount =(req,res,next)=>{
    count++
    console.log(count)
    // res.send('viewCount');
    next();
}

module.exports= viewCount