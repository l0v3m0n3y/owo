class owo{
    constructor(){
        this.api = "https://owo.vc/api/v2"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","content-type":"application/json"}
    }
    async short_url(url,generator,metadata="OWOIFY"){
        let req=await fetch(`${this.api}/link/`,{method:"POST",headers: this.headers,body:JSON.stringify({"link":url,"generator": generator,"metadata":metadata})});
        return req.json();
    }
    async get_url(url){
        let req=await fetch(`${this.api}/link/${url}`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {owo};