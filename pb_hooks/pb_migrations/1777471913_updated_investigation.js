/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_714192855")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_ypbj1zva42` ON `investigations` (\n  `Name`,\n  `Modality`\n)"
    ],
    "name": "investigations"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_714192855")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_ypbj1zva42` ON `investigation` (\n  `Name`,\n  `Modality`\n)"
    ],
    "name": "investigation"
  }, collection)

  return app.save(collection)
})
