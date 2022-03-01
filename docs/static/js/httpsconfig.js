const httpConfig = (configmethod) => {
    const httpProtocol = configmethod;
    httpProtocol = httpProtocol.replace("200", "OK");
    httpProtocol = httpProtocol.replace("404", "NOTFOUND");
};