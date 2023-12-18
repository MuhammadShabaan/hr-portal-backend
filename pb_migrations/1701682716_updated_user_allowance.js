/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5i4ry65hi2kjwi5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "83g9pvr5",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "requested",
        "approved",
        "archived",
        "rejected"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5i4ry65hi2kjwi5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "83g9pvr5",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "requested",
        "approved",
        "archived",
        "rejected"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
