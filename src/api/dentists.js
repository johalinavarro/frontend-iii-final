import axios from "axios";

export const getDentists = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data
}
export const getDentistById = async (id) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return data
}