import axios from "axios"

export function request(cofig,succes,failure) {
    const instance=axios.create({
        baseURL:"http://localhost",
        timeout:5000
    })

    instance(cofig)
        .then(res=>{
            succes(res)
        })
        .catch(err=>{
            failure(err)
        })
}