/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5i4ry65hi2kjwi5",
    "created": "2023-12-04 09:17:35.405Z",
    "updated": "2023-12-04 09:17:35.405Z",
    "name": "user_allowance",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uvdd4wzi",
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
        "id": "83g9pvr5",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "requested",
            "approved",
            "archived",
            "rejected"
          ]
        }
      },
      {
        "system": false,
        "id": "lns71sut",
        "name": "allowance_amount",
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
        "id": "ys5srzio",
        "name": "recurring",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("5i4ry65hi2kjwi5");

  return dao.deleteCollection(collection);
})
