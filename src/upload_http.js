const http=require('http');
const debug=require('debug')('Upload');

http.get('http://localhost:8089',(res)=>{
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          console.log(parsedData);
        } catch (e) {
          console.error(e.message);
        }
      });

}).on('error',(err)=>{
    debug(err);
})