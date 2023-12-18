/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "seuzg5ykl5kwjnd",
    "created": "2023-12-04 09:31:03.741Z",
    "updated": "2023-12-04 09:31:03.741Z",
    "name": "payslip",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5n1bbbuz",
        "name": "basic_pay",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "akdmxcu0",
        "name": "allowance",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("seuzg5ykl5kwjnd");

  return dao.deleteCollection(collection);
})
