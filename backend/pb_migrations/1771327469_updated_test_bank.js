/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3107091245")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != \"\" && \n(@request.auth.role = 'admin' || @request.auth.role = 'super_admin')"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3107091245")

  // update collection data
  unmarshal({
    "listRule": ""
  }, collection)

  return app.save(collection)
})
