const api = require('./controller');


function router(app){
    app.get("/api/getAll",api.GetAll),
    app.post("/api/new",api.Create),
    app.get("/api/:main_id",api.GetOne),
    app.put("/api/update/:main_id",api.Edit),
    app.delete("/api/destroy/:main_id",api.Delete)

    return app;
}

module.exports = router;