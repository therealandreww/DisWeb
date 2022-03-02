const httpConfig = (configmethod) => {
    const httpProtocol = configmethod;
    httpProtocol = httpProtocol.replace("200", "OK");
    httpProtocol = httpProtocol.replace("404", "NOTFOUND");
    httpProtocol = httpProtocol.replace("500", "INTERNAL_SERVER_ERROR");
};

function addConfiguration(configtype,
    configmethod,
    mergestatus,
    httpConfig) {
    if (configtype == "HTTPS") {
        return {type: "HTTPS/200", configmsg: [configmethod, mergestatus, httpConfig]};
    }   else if (configtype == "HTTP")  {
        return {type: "HTTP/HTML", returnmsg: "<div>Only users using HTTPS secure protocol can have access to this website.</div>"}
    }
}

addConfiguration("HTTPS", "configmethod_normalreg,merge=ok", "ok", "httpConfigType=normalMsgService.pack.service.applicationID");
httpConfig("HTTPS/200 // HTTPS/404 // HTTPS/500 // HTTP/200 // HTTP/404 // HTTPS/505 //");