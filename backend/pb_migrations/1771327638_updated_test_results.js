/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_343569626")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && \n(@request.auth.role = 'admin' || @request.auth.role = 'super_admin')",
    "deleteRule": "@request.auth.id != \"\" && \n(@request.auth.role = 'admin' || @request.auth.role = 'super_admin')",
    "listRule": "@request.auth.id != \"\" && \n(@request.auth.role = 'admin' || @request.auth.role = 'super_admin')",
    "updateRule": "@request.auth.id != \"\" && \n(@request.auth.role = 'admin' || @request.auth.role = 'super_admin')",
    "viewRule": "@request.auth.id != \"\" && \n(@request.auth.role = 'admin' || @request.auth.role = 'super_admin')"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_343569626")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
})
