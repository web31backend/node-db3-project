let db = require("../data/db-config");

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes")
        .where({ id })
        .first();
}

function findSteps(id) {
    return db("SC")
        .select('ST.id', 'SC.scheme_name', 'ST.step_number')
        .from('steps as ST')  
        .join('schemes as SC', 'ST.scheme_id', 'SC.id') // join schemes as SC on ST.scheme_id = SC.id
        .where('SC.id', id)
        .orderBy('ST.step_number');

        // select ST.id, SC.scheme_name, ST.step_number
        // from [steps] as ST
        // join schemes as SC on ST.scheme_id = SC.id
        // where SC.id = 1
        // order by ST.step_number;
}

function add(scheme) {
    return db("schemes")
        .insert(scheme, 'id')
        .then(([id]) => {
            return findById(id)
    })
}

function update(changes, id) {
    return db("schemes")
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id);
        });
}

async function remove(id) {
    let returned = await findById(id)
    
    return db("schemes")
        .where({ id })
        .del()
        .then( count => {
            return returned;
        })
}