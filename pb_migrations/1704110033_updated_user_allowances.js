/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5i4ry65hi2kjwi5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "94k8vjkr",
    "name": "description",
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
  const collection = dao.findCollectionByNameOrId("5i4ry65hi2kjwi5")

  // remove
  collection.schema.removeField("94k8vjkr")

  return dao.saveCollection(collection)
})
