import jwt from "jsonwebtoken"
function decoding(req,res){
    const {token}=req.body
    const data=jwt.decode(token)
    console.log(data)
    return res.json(data)
}
export default decoding