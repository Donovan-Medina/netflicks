const requests = {
    fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetchUpcoming: `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`,
}

export default requests;