/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g77to6xc2sp8e6t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bu8cypvz",
    "name": "response",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g77to6xc2sp8e6t")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
