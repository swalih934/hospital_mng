import base_url from '../services/base_url'
import commonApi from '../services/commonApi'

export const registerApi=async(data)=>{
    return await commonApi( `${base_url}/reg`,'POST',"",data)
}
export const loginApi=async(data)=>{
    return await commonApi(`${base_url}/log`,"POST","",data)
}

export const profileUpdateApi=async(data,header)=>{
    return await commonApi(`${base_url}/updateprofille`,"PUT",header,data)
}