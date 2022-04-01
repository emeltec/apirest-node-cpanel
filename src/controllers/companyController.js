const companies = require('../DB/list-companies');

exports.getCompanies = (req, res) => {
    const query = req.query.name;

    console.log(req.query.name)
    console.log(req.query.page)

    if(!query) res.json({message: 'Falta parametros'})

    const filtered = companies.filter(x => x.name.includes(query));
    res.json(filtered);
}