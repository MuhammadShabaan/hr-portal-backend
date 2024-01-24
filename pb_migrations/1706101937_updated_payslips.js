/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("seuzg5ykl5kwjnd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z51tdxol",
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
  const collection = dao.findCollectionByNameOrId("seuzg5ykl5kwjnd")

  // remove
  collection.schema.removeField("z51tdxol")

  return dao.saveCollection(collection)
})
