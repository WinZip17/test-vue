const defaultFilters = {
    country: '',
    type: [],
    rating: [],
    reviews_amount: 0,
    min_price: 0,
}

const defaultPagination = {
    page: 1,
    total_pages: 1,
    current_page: 1
}

const mutations = {
    setHotels (state, hotels) {
        const countriesList = []
        const typesList = []
        let reviewsList = []
        let prisesList = []
        hotels.forEach((item) => {
            !countriesList.includes(item.country) && countriesList.push(item.country)
            !typesList.includes(item.type) && typesList.push(item.type)
            !reviewsList.includes(item.reviews_amount) && reviewsList.push(item.reviews_amount)
            !prisesList.includes(item.min_price) && prisesList.push(item.min_price)
        })
        prisesList = prisesList.sort( (a, b) => a - b )
        reviewsList = reviewsList.sort( (a, b) => a - b )
        state.hotelsList = hotels
        state.filtersHotelsList = hotels
        state.countries = countriesList
        state.types = typesList
        state.reviews_amounts = reviewsList.reverse()
        state.min_prices = prisesList.reverse()
        state.filters.min_prices = prisesList[0]
        state.pagination.total_pages = hotels.length === 0 ? 1 : Math.ceil(hotels.length / 3)
    },
    setNewFilter (state, payload) {
        state.filters[payload.filterName] = payload.filterValue
    },
    setResetFilter (state) {
        state.filters = {...defaultFilters}
        state.filters.min_prices = state.min_prices[0]
        state.pagination = {...defaultPagination}
        state.pagination.total_pages = state.hotelsList.length === 0 ? 1 : Math.ceil(state.hotelsList.length / 3)
        state.filtersHotelsList = [...state.hotelsList]
    },
    nextPage (state, payload) {
        if (state.pagination.total_pages >= payload) {
            state.pagination.current_page = payload
        }
    },
    previousPage (state, payload) {
        if (payload >= 1) {
            state.pagination.current_page = payload
        }
    },
    setApplyFilter (state) {
        let newHotels = [...state.hotelsList]
        if (state.filters.country.length > 0) {
            newHotels = newHotels.filter((i) => i.country === state.filters.country)
        }
        if (state.filters.type.length > 0) {
            newHotels = newHotels.filter((i) => state.filters.type.includes(i.type))
        }
        if (state.filters.rating.length > 0) {
            let hotelRatingArr = []
            newHotels.forEach((hotel) => {
                state.filters.rating.forEach((rating) => {
                    hotel.rating >= Number(rating) && hotel.rating <= Number(rating) + 0.9999 && hotelRatingArr.push(hotel)
                })
            })
            newHotels = hotelRatingArr
        }
        if (state.filters.reviews_amount !== 0) {
            newHotels = newHotels.filter((i) => i.reviews_amount >= state.filters.reviews_amount)
        }
        if(state.filters.min_price !== 0) {
            newHotels = newHotels.filter((i) => i.min_price <= state.filters.min_price)
        }
        state.pagination.total_pages = newHotels.length === 0 ? 1 : Math.ceil(newHotels.length / 3)
        state.pagination.page = 1
        state.filtersHotelsList = newHotels
    }
}

export default mutations