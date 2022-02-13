let type;
const httpConfigurations = (reqType) => {
    if (reqType == "HTTP/202"){type = "accepted";}
    if (reqType == "HTTPS/202"){type = "accepted/HTTPS";}
    if (reqType == "HTTP/200"){type = "OK";}

        const getHttpGet = (keypair) => {
            if (keypair != null)    {
                const config = {
                    requestformtype: "HTTP",
                    protocolsecure: "letsencrypt.ssl.http"
                };
            }   else    {
                        const keypairs = {};
                        return keypairs;
                }
            };
        const getHttpsGet = (keypair) => {if (keypair != null){const configGetConfigurator = null;}}}
        // Get system metrics: Get system information (key/keypress)
        let getSystemMetrics = httpConfigurations("HTTPS/200");
        let configuratorLang = "HTTPS/200";