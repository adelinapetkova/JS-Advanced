class Request{
    constructor(method, uri, version, message){
        this.message=message;
        this.method=method;
        this.uri=uri;
        this.version=version;
        this.response=undefined;
        this.fulfilled=false;
    }
}