/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("lxbyhtp2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kphdlrgs",
    "name": "roles",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "manager",
        "admin",
        "employee"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2bos0i8l",
    "name": "jon_type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "part time",
        "full time"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lxbyhtp2",
    "name": "role",
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

  // remove
  collection.schema.removeField("kphdlrgs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2bos0i8l",
    "name": "jon_type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "part time",
        "full time"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
