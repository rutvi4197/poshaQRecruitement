//Sucessfull get Result
exports.send200 = (res, data) => res.status(200).send({
    success: true,
    data: data
});

//Created
exports.send201 = (res, data) => res.status(201).send({
    success: true,
    data: data
});

//empty data
exports.send204 = (res) => res.status(204).send({
    success: true,
    error: " No data found"
});

//Internal error(Bug)
exports.send500 = (res, err) => res.status(500).send({
    success: false,
    error: err
});

//Unauthorized access
exports.send401 = (res, err) => res.status(401).send({
    success: false,
    error: err
});

//Bad request
exports.send400 = (res, err) => res.status(400).send({
    success: false,
    error: err
});
