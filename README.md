# owo
JavaScript library for owo.vc
# main
```js
async function main(){
    const {owo} = require('./owo');
    const url= new owo();
    let req=await url.get_url("url","owo")
    console.log(req)
}
main()
```
