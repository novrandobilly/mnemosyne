/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3107091245")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && \n(@request.auth.role = 'admin' || @request.auth.role = 'super_admin')",
    "deleteRule": "@request.auth.id != \"\" && \n(@request.auth.role = 'admin' || @request.auth.role = 'super_admin')",
    "updateRule": "@request.auth.id != \"\" && \n(@request.auth.role = 'admin' || @request.auth.role = 'super_admin')"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3107091245")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "updateRule": ""
  }, collection)

  return app.save(collection)
})
