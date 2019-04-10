'use strict'

/*임시 코드*/
class Test{

  constructor(){
    this.sayHello = 'hello world';
  }

  static get key(){
    return {
      success: '',
      message: '',
      error: '',
    };
  }

  get hello() {
    return this.sayHello;
  }

  set hello(value) {
    this.sayHello = value;
  }
}

module.exports = Test;
