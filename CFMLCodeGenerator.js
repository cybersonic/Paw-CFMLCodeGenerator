var CFMLCodeGenerator = function() {


    this.generate = function(context,requests,options){
        var generated = "" ;

            // iterate requests (`Request` objects)
            for (var i in requests) {

                var request = requests[i];
                var request_code = '<cfhttp url="' + request.urlBase + '"';
                    request_code += ' method = "' + request.method + '"';
                    request_code += '>\n';
                
                var headers = request.headers;
                for (var header_name in headers) {
                    var header_value = headers[header_name];
                    request_code += '\t<cfhttpparam type="header" name="'+header_name+'" value="'+header_value+'">\n';
                }

                var urlparams = request.getUrlParameters();
                for (var urlparam_name in urlparams) {
                    var urlparam_value = urlparams[urlparam_name];
                    request_code += '\t<cfhttpparam type="url" name="'+urlparam_name+'" value="'+urlparam_value+'">\n';
                }
                
                // // iterate on request headers
                // var headers = request.headers;
                // for (var header_name in headers) {
                //     var header_value = headers[header_name];
                //     // do something
                // }
                // get the latest response status code
                // var status_code = request.getLastExchange().responseStatusCode;
                // // get the latest response body
                // var body = request.getLastExchange().responseBody;
                // generated += status_code + "\n" + body + "\n\n";


                request_code +=  "\n</cfhttp>";
                generated += request_code + "\n\n";
            }




        return generated;
    }

}

CFMLCodeGenerator.identifier = "org.lucee.CFMLCodeGenerator";
CFMLCodeGenerator.title = "CFML Code Generator";
registerCodeGenerator(CFMLCodeGenerator);