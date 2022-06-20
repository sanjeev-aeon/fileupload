const axios=require('axios');

axios({
    method:'post',
    url:'http://localhost:8089/uploadPackage',
    
    transformRequest:[function(data,header){
       console.log(data,header);
       header['post']['Content-Type']='multipart/form-data; boundary=----WebKitFormBoundaryzYRuwjzR0g9eLBmc';


       return data;
    }]
}).then((res)=>{
    console.log(res);
}).catch((err)=>console.log(err));


axios({
    method:'get',
    url:'http://pl2inpun2771nb:8089/'
}).then((res)=>{
    console.log(res);
}).catch((err)=>console.log(err));