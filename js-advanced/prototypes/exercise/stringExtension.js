(function solve() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        } else {
            return str + this;
        }
    }

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        } else {
            return this + str;
        }
    }

    String.prototype.isEmpty = function () {
        if (this.length == 0) {
            return true;
        }

        return false;
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }

        if (n > this.length) {
            return this.toString();
        }

        if(n<=this.length){
            let words=this.split(' ');
            if(words.length==1){
                let result='';
                for(let i=0; i<n-3; i++){
                    result+=this[i];
                }
                result+='...';
                return result;
            }
            words.pop();
            let result=words.join(' ');
            result+='...';
            if(result.length>n){
                result='';
                for(let i=0; i<n-3; i++){
                    result+=this[i];
                }
                result+='...';
            }

            return result;
        }
    }

    String.format = function (string, ...params) {
        for(let i=0; i<params.length; i++){
            string=string.replace(`{${i}}`, params[i]);
        }

        return string;
    }
})();


let str = 'my string';

str = str.ensureStart('my');
console.log(str)
str = str.ensureStart('hello ');
console.log(str)
str = str.truncate(16);
console.log(str)
str = str.truncate(4);
console.log(str)
str = str.truncate(8);
console.log(str)
str = str.truncate(4);
console.log(str)
str = str.truncate(2);
console.log(str)

str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str)
str = String.format('jumps {0} {1}', 'dog');
console.log(str)

