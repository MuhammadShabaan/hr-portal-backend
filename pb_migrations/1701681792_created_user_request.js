/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "561emuajtbk626m",
    "created": "2023-12-04 09:23:12.000Z",
    "updated": "2023-12-04 09:23:12.000Z",
    "name": "user_request",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hsiioowh",
        "name": "user_id",
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
        "id": "aee7d4gx",
        "name": "request_type",
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
      },
      {
        "system": false,
        "id": "eznm8gbb",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "pending",
            "accepted",
            "declined"
          ]
        }
      },
      {
        "system": false,
        "id": "bwg1zsor",
        "name": "description",
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
        "id": "be178oqd",
        "name": "note",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("561emuajtbk626m");

  return dao.deleteCollection(collection);
})
