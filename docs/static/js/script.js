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
    };

    config_get = 'HTTP/202';

    HttpConfig();
};