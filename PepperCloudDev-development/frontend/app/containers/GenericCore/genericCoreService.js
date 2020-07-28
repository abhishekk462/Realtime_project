

import {postData, request} from 'utils/request';


let leadEntryService = {



  saveForm(formData){
    console.log('saving now', formData);
    return postData('/api/core/general-form/save', formData)
      .then(response => {
        console.log('response received is ', response);
        return Promise.resolve(response);
      });
  },

  loadRecords(screenId){
    console.log('loading records for',screenId );
    return request('/api/core/records/'+screenId)
  },

  loadTemplateContent(templateId){
    return request('/api/core/template-content/'+templateId)
  },

  saveTemplateDetails(template){
    return postData('/api/core/template-content',template)
      .then(response => Promise.resolve(response));
  },

  loadFieldTypes(){
    return request('/api/core/fieldTypes');
  }

};





export default leadEntryService;
