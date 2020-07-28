import {request} from 'utils/request';


let coreService = {

  fieldParamValues(fieldId){
    return request('/api/core/field-param/'+fieldId)
      .then(response => {

        let values = response.map((item) => {
          return item.paramValue;
        });
      //  console.log(values);
        return Promise.resolve(response);
      });
  },

  paramValues(paramKey){
   // console.log('now requesting for ',paramKey);



    return request('/api/core/codes/'+paramKey)
       .then(response => {
         // console.log('response reveived is ', response);
          return Promise.resolve(response);
       });
  },

  loadForm(screenId){
    const companyId = "1"; //TODO : Remove this hard coding

    return request('/api/core/screen-content/'+ screenId + '?companyId='+companyId)
      .then(response => {
        return Promise.resolve(response);
      });
  },

  loadMenus(){

    return request('/api/core/menus')
      .then(response => {
       // console.log('response reveived is ', response);
        return Promise.resolve(response);
      });
  },

  searchFacebookUsers(){
    return request('/social-service/fb/user')
      .then(response => {
        console.log('social response is', response);
        Promise.resolve(response);
      });

  }

};





export default coreService;
