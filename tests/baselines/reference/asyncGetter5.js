//// [asyncGetter5.ts]
declare class Promise<T> {
    constructor(init: (resolve: (value?: T | IPromise<T>) => void, reject: (reason?: any) => void) => void);
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromise<TResult>, onrejected?: (reason: any) => TResult | IPromise<TResult>): Promise<TResult>;
}

class C {
  async get await(): Promise<void> {
  }
}

//// [asyncGetter5.js]
var C = (function () {
    function C() {
    }
    Object.defineProperty(C.prototype, "await", {
        get: function () {
            return new Promise(function (_resolve) {
                _resolve(__awaiter(__generator(function (_state) {
                    return [2 /*return*/];
                })));
            });
        },
        enumerable: true,
        configurable: true
    });
    return C;
})();
