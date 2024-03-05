/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5i4ry65hi2kjwi5")

  // remove
  collection.schema.removeField("wkj6sxko")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1ihfutml",
    "name": "use_email",
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
  const collection = dao.findCollectionByNameOrId("5i4ry65hi2kjwi5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wkj6sxko",
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

  // remove
  collection.schema.removeField("1ihfutml")

  return dao.saveCollection(collection)
})
