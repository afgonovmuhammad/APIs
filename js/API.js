import dataUser from "./dom.js";

//GET
export default async function  getUser () {
    try {

        let {data} = await axios.get('https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department');
        dataUser(data)  
    } 
    catch (error) {
        console.log(error);
        
    }
}

//POST
const postUser = async (editUser) => {
    try {
        const {data} = await axios.post('https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department',editUser)
        getUser()
    } 
    catch (error) {
        
    }
}

const deleteUser = async (id) => {
    try {
        const {data} = await axios.delete(`https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department/${id}`)
        getUser()
        dataUser()
    } 
    catch (error) {
        
    }
}

const putUser = async (idx,user2) =>{
    try {
        const {data} = await axios.put(`https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department/${idx}`,user2)
        getUser()
    } 
    catch (error) {
        
    }
}


export {postUser,deleteUser,putUser}