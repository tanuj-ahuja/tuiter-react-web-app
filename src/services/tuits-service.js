import axios from 'axios';
const TUITS_API = 'http://localhost:4000/api/tuits';

export const createTuit = async (tuit) => {
    console.log("s",tuit)
    const response = await axios.post(TUITS_API, {tuit})
    return response.data;
}
export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}
export const deleteTuit = async (id) => {
    console.log(id);
    const response = await axios
        .delete(`${TUITS_API}/${id}`);
    console.log("j",response.data)
    return id;
}
export const updateTuit = async (tuit) => {
    console.log(tuit)
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}


