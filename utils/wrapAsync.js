
wrapAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch((err) => next(err));
    }
}

module.exports = wrapAsync;



// module.exports = (fn) => {
//     return (req,res,next) => {
//         fn(req,res,next).catch(next);
// }
// }                            //as per lecture


// function wrapAsync(fn) {
//     return function(req, res, next) {
//         fn(req, res, next).catch((err) => next(err));
//     }
// }

// module.exports = wrapAsync;     //works fine