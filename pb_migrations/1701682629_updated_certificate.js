/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fonaddfchmho6a4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "soaljjyq",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "certificate",
        "letter"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fonaddfchmho6a4")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
