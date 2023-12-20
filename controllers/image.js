


const imageHendler = (db) => (req, res) => {
    const { id, numberOfFaces } = req.body;      
    return db('users')
    .where('id', '=', id)
    .increment('enries', numberOfFaces)
    .returning('enries')
    .then(entries => {
        res.json(entries[0]);
    }).catch(err => res.status(400).json('unable to get count'))
}

module.exports={
    imageHendler
};