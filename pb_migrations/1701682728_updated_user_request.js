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
        "wfh",
        "allowance"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eznm8gbb",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "accepted",
        "declined"
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
      "maxSelect": 2,
      "values": [
        "leave",
        "short leave",
        "wfh",
        "allowance"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
