/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("561emuajtbk626m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aee7d4gx",
    "name": "request_type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "leave",
        "short leave",
        "allowance",
        "work from home"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("561emuajtbk626m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aee7d4gx",
    "name": "request_type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "leave",
        "short leave",
        "wfh",
        "allowance"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
