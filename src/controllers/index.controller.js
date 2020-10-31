const router = require("../routes/index.routes");

indextCtrl ={};

indextCtrl.renderIndex = (req, res) => {
    res.render('index')
};


indextCtrl.renderAbout =(req, res) => {
    res.render('partials/about')
};

module.exports = indextCtrl;