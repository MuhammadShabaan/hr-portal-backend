/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fonaddfchmho6a4",
    "created": "2023-12-04 09:18:59.243Z",
    "updated": "2023-12-04 09:18:59.243Z",
    "name": "certificate",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "egmbcagd",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "soaljjyq",
        "name": "type",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "certificate",
            "letter"
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
  const collection = dao.findCollectionByNameOrId("fonaddfchmho6a4");

  return dao.deleteCollection(collection);
})
