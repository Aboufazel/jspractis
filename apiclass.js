

class Api {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
  getUrl(){
        return fetch(this.apiUrl);
  }
  getUrlId(id){
        return fetch(`${this.apiUrl}/${id}`);
  }

  createApi(data){
        return fetch(this.apiUrl , {
            method : "POST",
            body : JSON.stringify(data),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
  }

  updateApi(data , id){
      return fetch(`${this.apiUrl}/${id}` , {
          method:"PUT",
          body:JSON.stringify(data),
          headers:{
              'Content-type': 'application/json; charset=UTF-8',
          },
      });
  }

  deleteApi(id){
      return fetch(`${this.apiUrl}/${id}` , {
          method:"DELETE",
          headers:{
              'Content-type': 'application/json; charset=UTF-8',
          },
      });
  }
}