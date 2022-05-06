const providers = require('../DB/list-companies');

const filterData = (query) => {
    return providers.filter((x) =>
        x.name.toLowerCase().includes(query.toLowerCase())
    );
};

exports.getCompanies = (req, res) => {
    let { name, page, size } = req.query;

    if (!name) {
        res.json({ message: 'Falta parametros' })
    }

    if (page == undefined || page == 0) {
        page = 1;
    }
    
    const filtered = filterData(name);

    if(size == undefined || size == 0) {
        size = 6;
    }

    const final = size * page;
    const inicio = final - size;

    let response = {
        companies: filtered.slice(inicio, final),
        totalPages: Math.ceil(filtered.length / size),
    };

    res.json(response);
}

/**
 * http://localhost:3000/msbm/providers?name=peru&page=3&size=10
 */