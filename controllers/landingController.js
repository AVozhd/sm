exports.index = function(req, res) {
    res.render('landing', { title: 'Self Marketing' });
    // async.parallel({}, function(err, results) {
    //     res.render('landing', { title: 'Self Marketing', error: err });
    // });
};
