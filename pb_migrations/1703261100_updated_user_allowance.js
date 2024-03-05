/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5i4ry65hi2kjwi5")

  collection.name = "user_allowances"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5i4ry65hi2kjwi5")

  collection.name = "user_allowance"

  return dao.saveCollection(collection)
})
