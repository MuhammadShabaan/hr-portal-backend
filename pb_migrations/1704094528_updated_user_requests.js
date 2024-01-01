/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("561emuajtbk626m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rhxuvdxo",
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
  const collection = dao.findCollectionByNameOrId("561emuajtbk626m")

  // remove
  collection.schema.removeField("rhxuvdxo")

  return dao.saveCollection(collection)
})
