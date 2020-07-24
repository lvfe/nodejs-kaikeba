module.exports = {
    get url(){
        return this.request.url;
    },
    get body(){
        console.log(this.response);
        return this.response.body;
    },
    set body(val){
        this.response.body = val;
    },
    get method(){
        return this.request.method;
    }

}