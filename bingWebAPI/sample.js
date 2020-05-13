		// DECLARE REQUIRED MODULES
const CognitiveServicesCredentials=require('ms-rest-azure').CognitiveServicesCredentials;
const WebSearchAPIClient=require('azure-cognitiveservices-websearch');

		// INSTANTIATE A CLIENT
let credentials= new CognitiveServicesCredentials('aff32926898841789f5190ef5866dc31');
let client=new WebSearchAPIClient(credentials);

		// MAKE REQUEST AND PRINT RESULT
client.web.search('opentabs').then((result) => {
    let properties = ["images", "webPages", "news", "videos"];
    for (let i = 0; i < properties.length; i++) {
        if (result[properties[i]]) {
            console.log(result[properties[i]].value);
        } else {
            console.log(`No ${properties[i]} data`);
        }
    }
}).catch((err) => {
    throw err;
})