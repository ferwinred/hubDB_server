const { hubsClient, getProps, HubDbRequest } = require("../hubsDB.config");
const { tableName } = require("../lib/config");

const getRows = async (req, res, next) => {
  try {
    const response = await hubsClient.cms.hubdb.rowsApi.readDraftTableRows(
      tableName,
      getProps.sort,
      getProps.after,
      getProps.limit,
      getProps.properties
    );

    response.total
      ? res.json(response)
      : res.status(400).json({ msg: "There aren't any rows in this table" });
  } catch (err) {
    next(err);
  }
};

const getRowById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await hubsClient.cms.hubdb.rowsApi.getDraftTableRowById(
      tableName,
      id
    );
    response
      ? res.json(response)
      : res
          .status(400)
          .json({ msg: "There isn't a row in this table with this id" });
  } catch (err) {
    next(err);
  }
};

const createRow = async (req, res, next) => {
  try {
    const { name, lastname, document } = req.body;

    const row = {
      name: name,
      last_name: lastname,
      document_id: document,
    };

    HubDbRequest.values = row;

    await hubsClient.cms.hubdb.rowsApi.createTableRow(tableName, HubDbRequest);

    res.json({ msg: "row was successfully created" });
  } catch (err) {
    next(err);
  }
};

const updateRow = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, last_name, document_id } = req.body;

    const row = {
      name,
      last_name,
      document_id,
    };

    HubDbRequest.values = row;

    await hubsClient.cms.hubdb.rowsApi.updateDraftTableRow(tableName, id, HubDbRequest);

    res.json({msg: "row successfully modified"})
  } catch (err) {
    next(err);
  }
};

const deleteRow = async (req, res, next) => {
  try {

    const { id } = req.params

    await hubsClient.cms.hubdb.rowsApi.purgeDraftTableRow(tableName, id)

    res.json({msg: "row successfully deleted"})

  } catch (err) {
    next(err);
  }
};

module.exports = {
  getRows,
  getRowById,
  createRow,
  updateRow,
  deleteRow,
};
