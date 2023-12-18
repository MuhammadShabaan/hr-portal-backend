/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "chxzbc9bmmbepzn",
    "created": "2023-12-04 09:28:24.684Z",
    "updated": "2023-12-04 09:28:24.684Z",
    "name": "request",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "buqwdclp",
        "name": "type",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "leave",
            "short leave",
            "wfh",
            "allowance"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("chxzbc9bmmbepzn");

  return dao.deleteCollection(collection);
})
