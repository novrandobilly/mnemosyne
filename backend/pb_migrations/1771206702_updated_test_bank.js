/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3107091245")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_P0BEi4qeQN` ON `test_bank` (`name`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3107091245")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
