const products = [
    {
        id: 1,
        name: "Product 1",
        reviews: [
            { rating: 4 },
            { rating: 5 },
            { rating: 3 },
            { rating: 5 },
            { rating: 4 },
        ],
    },
    {
        id: 2,
        name: "Product 2",
        reviews: [
            { rating: 2 },
            { rating: 3 },
            { rating: 4 },
            { rating: 1 },
            { rating: 2 },
        ],
    },
    {
        id: 3,
        name: "Product 3",
        reviews: [
            { rating: 5 },
            { rating: 5 },
            { rating: 4 },
            { rating: 5 },
            { rating: 4 },
        ],
    },
    {
        id: 4,
        name: "Product 4",
        reviews: [
            { rating: 2 },
            { rating: 5 },
            { rating: 4 },
            { rating: 5 },
            { rating: 4 },
        ],
    },
];

const avgRating = (products = []) => {
    const result = [];
    const getAverage = (reviews) => {
        for (review of reviews) {
            return reviews.reduce((prev, review) => prev + review.rating, 0) / reviews.length;
        }
    }
    for (el of products) {
        const product = {};
        product.id = el.id;
        product.rating = getAverage(el.reviews)
        result.push(product);
    }
    return result
}
