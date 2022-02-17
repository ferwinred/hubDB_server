const hubspot = require("@hubspot/api-client");
const { API_KEY} = require("./lib/config");

const hubsClient = new hubspot.Client({"apiKey": API_KEY});

const getProps = {
    sort: undefined,
    after: undefined,
    limit: 10,
    properties: undefined
}

const rowSchema = {
    "name": null,
    "last_name": null,
    "document_id": null
};


const HubDbRequest = { path: null, name: null, childTableId: 0, values: rowSchema }

module.exports = {
    hubsClient,
    getProps,
    rowSchema,
    HubDbRequest
}