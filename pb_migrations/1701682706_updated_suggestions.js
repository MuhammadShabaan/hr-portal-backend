/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g77to6xc2sp8e6t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dtnqwifd",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "complain",
        "suggestion"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g77to6xc2sp8e6t")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
