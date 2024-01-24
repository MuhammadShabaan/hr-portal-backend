/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fonaddfchmho6a4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zgqtayun",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fonaddfchmho6a4")

  // remove
  collection.schema.removeField("zgqtayun")

  return dao.saveCollection(collection)
})
