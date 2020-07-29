
const state = () => ({
    hotelsList: [],
    filtersHotelsList: [],
    countries: [],
    types: [],
    ratings: ["1","2","3","4","5"],
    reviews_amounts: [],
    min_prices: [],
    pagination: {
        page: 1,
        total_pages: 1,
        current_page: 1
    },
    filters: {
        country: '',
        type: [],
        rating: [],
        reviews_amount: 0,
        min_price: 0,
    }
})

export default state