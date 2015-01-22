//// [preserveAsyncComment0.ts]
declare class Promise<T> {
    constructor(init: (resolve: (value?: T | IPromise<T>) => void, reject: (reason?: any) => void) => void);
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromise<TResult>, onrejected?: (reason: any) => TResult | IPromise<TResult>): Promise<TResult>;
}

async function func(): Promise<void> {
  // variable statement
  var a = 1;
  var /*variable decl*/ b = 1;
  var c = /*variable decl*/ 1;
}

 function func1(): void {
  // variable statement
  var a = 1;
  var /*variable decl*/ b = 1;
  var c = /*variable decl*/ 1;
}


//// [preserveAsyncComment0.js]
function func() {
    return new Promise(function (_resolve) {
        _resolve(__awaiter(__generator(function (_state) {
            a = 1;
            b = 1;
            c = 1;
            return [2 /*return*/];
        })));
    });
    var a, b, c;
}
function func1() {
    // variable statement
    var a = 1;
    var b = 1;
    var c = 1;
}
