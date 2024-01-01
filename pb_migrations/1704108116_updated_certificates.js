/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fonaddfchmho6a4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wfdw6yri",
    "name": "requested_by",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jescinbe",
    "name": "user_email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fonaddfchmho6a4")

  // remove
  collection.schema.removeField("wfdw6yri")

  // remove
  collection.schema.removeField("jescinbe")

  return dao.saveCollection(collection)
})
