/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_343569626")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && \n(@request.auth.role = 'admin' || @request.auth.role = 'super_admin' || @request.auth.role = 'participant')"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_343569626")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && \n(@request.auth.role = 'admin' || @request.auth.role = 'super_admin')"
  }, collection)

  return app.save(collection)
})
