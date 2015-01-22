//// [awaitContinueStatement6.ts]
declare class Promise<T> {
    constructor(init: (resolve: (value?: T | IPromise<T>) => void, reject: (reason?: any) => void) => void);
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromise<TResult>, onrejected?: (reason: any) => TResult | IPromise<TResult>): Promise<TResult>;
}
declare var a: number;
declare var p: Promise<number>;
async function f(): Promise<void> {
  label: for (;;) {
    await p;
    continue label;
  }
}

//// [awaitContinueStatement6.js]
function f() {
    return new Promise(function (_resolve) {
        _resolve(__awaiter(__generator(function (_state) {
            switch (_state.label) {
                case 0:
                    return [4 /*yield*/, p];
                case 1:
                    return [3 /*break*/, 2];
                case 2: return [3 /*break*/, 0];
                case 3: return [2 /*return*/];
            }
        })));
    });
}
