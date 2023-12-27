/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("seuzg5ykl5kwjnd")

  collection.name = "payslips"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("seuzg5ykl5kwjnd")

  collection.name = "payslip"

  return dao.saveCollection(collection)
})
