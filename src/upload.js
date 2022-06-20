var fs = require('fs');
var request = require('request');
var path=require('path')

var upfile = path.join(__dirname,'..','data','AnBAAMpVpEYFsA.plmx');
console.log(upfile);
fs.readFile(upfile, function(err, content){
    if(err){
        console.error(err);
    }
    var metadata = {

        filename: "AnBAAMpVpEYFsA.plmx"
    };
    var url = "http://pl2inpun2771nb:8089/uploadPackage";
    var boundary = "xxxxxxxxxx";
    var data = "";
    for(var i in metadata) {
        if ({}.hasOwnProperty.call(metadata, i)) {
            data += "--" + boundary + "\r\n";
            data += "Content-Disposition: form-data; name=\"" + i + "\"; \r\n\r\n" + metadata[i] + "\r\n";
        }
    };
    data += "--" + boundary + "\r\n";
    data += "Content-Disposition: form-data; name=\"file\"; filename=\"" + upfile + "\"\r\n";
    data += "Content-Type:application/octet-stream\r\n\r\n";
    var payload = Buffer.concat([
            Buffer.from(data, "utf8"),
            new Buffer.from(content, 'binary'),
            Buffer.from("\r\n--" + boundary + "--\r\n", "utf8"),
    ]);
    var options = {
        method: 'post',
        url: url,
        headers: {"Content-Type": "multipart/form-data; boundary=" + boundary},
        body: payload,
    };
    request(options, function(error, response, body) {
        console.log(body);
    });
});