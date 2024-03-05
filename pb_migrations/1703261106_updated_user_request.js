/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("561emuajtbk626m")

  collection.name = "user_requests"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("561emuajtbk626m")

  collection.name = "user_request"

  return dao.saveCollection(collection)
})
