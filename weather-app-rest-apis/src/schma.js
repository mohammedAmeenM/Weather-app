const { gql } = require('graphql-tag');
const axios = require('axios');


const typeDefs = gql`
  type Weather {
    temperature: Float
    description: String
    humidity: Int
    windSpeed: Float
    

  }

  type Query {
    getWeather(city: String!): Weather
  }
`;

const resolvers = {
    Query: {
      getWeather: async (_, { city }) => {
        try {
          const apiKey = process.env.WEATHER_API_KEY;
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?&appid=de7e9e5cabf1db28201cac646548c99e&q=${city},India&units=metric`);
            console.log(response)
            const { main, weather, wind, name } = response.data;
        
            return {
              temperature: main.temp,
              description: weather[0].description,
              humidity: main.humidity,
              windSpeed: wind.speed,
              place: name
            };
        } catch (error) {
          throw new Error('Error fetching weather data');
        }
      },
    },
  };

module.exports = { typeDefs, resolvers };
