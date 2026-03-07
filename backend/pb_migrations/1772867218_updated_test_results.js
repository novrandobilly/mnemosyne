/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_343569626")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select2309455334",
    "maxSelect": 1,
    "name": "test_type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "papikostick",
      "disc",
      "eas4",
      "eas5",
      "eas6",
      "eas7",
      "eas10",
      "a5",
      "dr",
      "da5",
      "st17",
      "intray1",
      "intray2"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_343569626")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select2309455334",
    "maxSelect": 1,
    "name": "test_type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "papikostick",
      "disc"
    ]
  }))

  return app.save(collection)
})
