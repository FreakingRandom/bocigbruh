const fs = require("fs")
module.exports.createUserData=(UserID)=>{
    fs.writeFileSync("./Userdata/"+ UserID+".json", "{}")
}
module.exports.getUserData=(UserID)=>{
    const Path = "./Userdata/"+ UserID+".json"
    if (!fs.existsSync(Path)){
        module.exports.createUserData(UserID)
    }
    const UserData = JSON.parse(fs.readFileSync(Path))
    return UserData
}

module.exports.setUserData=(userID,name,value)=>{
    let UserCum2 = module.exports.getUserData(userID)
    UserCum2[name] = value
    fs.writeFileSync("./Userdata/"+ userID+".json",JSON.stringify(UserCum2))
}