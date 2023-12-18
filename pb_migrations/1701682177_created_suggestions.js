/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "g77to6xc2sp8e6t",
    "created": "2023-12-04 09:29:37.022Z",
    "updated": "2023-12-04 09:29:37.022Z",
    "name": "suggestions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dtnqwifd",
        "name": "type",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "complain",
            "suggestion"
          ]
        }
      },
      {
        "system": false,
        "id": "xt0mswol",
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
        "id": "cvboyywk",
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
        "id": "bu8cypvz",
        "name": "responce",
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
  const collection = dao.findCollectionByNameOrId("g77to6xc2sp8e6t");

  return dao.deleteCollection(collection);
})
