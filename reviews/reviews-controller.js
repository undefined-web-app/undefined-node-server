import * as dao from "./reviews-dao.js";

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body;
        const actualReview = await dao.createReview(review);
        res.json(actualReview);
    };

    const findAllReviews = async (req, res) => {
        const reviews = await dao.findAllReviews();
        var result = []
        reviews.forEach(r => result.push(r));
        result.sort((r1, r2) => r2.time - r1.time);
        res.json(result);
    };

    // const deleteReview = async (req, res) => {
    //     const rid = req.param.rid;
    //     const status = await dao.deleteReview(rid);
    //     res.json(status);
    // };
    //

    app.post("/review", createReview);

    app.get("/review", findAllReviews);

    // app.delete("/review/:rid", deleteReview);
};

export default ReviewsController;
