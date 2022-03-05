const getConfig = () => {
    let config_get;
    let config_get_addr;
    let config_http;
    let config_http_model;

    const HttpConfig = () => {
        let http_reactor;
        let http_const;
        let http_app;
        let http_letsencrypt;
        let http_encryptsignature;

        http_reactor = 'STATIC/Html'
        http_letsencrypt = 'MODEL_HTTP/Html';
        http_encryptsignature = 'MODEL/gdata.get';
        http_app = http_letsencrypt.length;

        const data = [
            http_reactor,
            http_const,
            http_app,
            http_letsencrypt,
            http_encryptsignature
        ];
        return data;
    };

    config_get = 'HTTP/202';

    configurations = HttpConfig();
    const http_data_reactor = configurations[0];


    // Build configurations for JavaScript
    let http_langconfig;

    if (http_data_reactor == 'STATIC/Html') {
        http_langconfig = 'enus';
    }   else    {
        http_langconfig = null;
    }

    const pluginData = {
        data: "constnolog"
    };
    // Configure plugins
};

getConfig();

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