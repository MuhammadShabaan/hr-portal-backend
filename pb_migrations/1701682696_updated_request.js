/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("chxzbc9bmmbepzn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "buqwdclp",
    "name": "type",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("chxzbc9bmmbepzn")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
