import axios from "axios"

export const fetchData = async () => {
    axios.get(`https://api.quotable.io/random`)
    .then(res => {
      const persons = res.data;
      return persons;
    })
}