const providers = require('../DB/list-companies');

exports.getCompanies = (req, res) => {
    const query = req.query.name;

    console.log(req.query.name)
    console.log(req.query.page)

    if(!query) {
        res.json({message: 'Falta parametros'})
    }

    const filtered = providers.filter(x => x.name.toLowerCase().includes(query.toLowerCase()));

    const response = {
        companies: [...filtered],
        totalPages: 4
    }
    res.json(response);
}

exports.getServices = (req, res) => {
    
}