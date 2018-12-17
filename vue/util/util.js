import axios from 'axios'
let util={}
util.post = function(req,param,timeout,errorcallback) {
  if(timeout === undefined)
  {
    timeout = 60000;
  }
  return axios.create({
    baseURL: "http://localhost:3000",
    withCredentials:true,
    timeout: timeout
  }).post(req,"json="+encodeURIComponent(encodeURIComponent(JSON.stringify(param)))).then(function (res) {
    try {
      console.log(111111111111)
      console.log(res);
    }catch (e){

    }
  }).catch((e)=>{
    console.log(e);
    if(errorcallback)
      errorcallback();
    /*if(null!=res && null!=res.data) {
        Message.error({content: "异常:" + res.data.msg})
    }*/
  }).finally(res=>{
    loading();
  });
};
export default util
