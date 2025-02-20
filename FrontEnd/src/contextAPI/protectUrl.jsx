import { useAuth } from "./context";

function protectUrl(){
    const {user} =useAuth()
    if(!user){
        return '/login'
    }else{
        return `${url}`
    }
}