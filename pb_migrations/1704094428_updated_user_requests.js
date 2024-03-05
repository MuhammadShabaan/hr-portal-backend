/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("561emuajtbk626m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hahyc26b",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("561emuajtbk626m")

  // remove
  collection.schema.removeField("hahyc26b")

  return dao.saveCollection(collection)
})
