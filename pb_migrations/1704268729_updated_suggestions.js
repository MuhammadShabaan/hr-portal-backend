/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g77to6xc2sp8e6t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jzhm93fp",
    "name": "suggested_by",
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
    "id": "kdfaewyv",
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
  const collection = dao.findCollectionByNameOrId("g77to6xc2sp8e6t")

  // remove
  collection.schema.removeField("jzhm93fp")

  // remove
  collection.schema.removeField("kdfaewyv")

  return dao.saveCollection(collection)
})
