//// [awaitUnaryExpression3.ts]
declare class Promise<T> {
    constructor(init: (resolve: (value?: T | IPromise<T>) => void, reject: (reason?: any) => void) => void);
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromise<TResult>, onrejected?: (reason: any) => TResult | IPromise<TResult>): Promise<TResult>;
}
declare var a: number;
declare var p: Promise<number>;
async function func(): Promise<void> {
    "before";
    var b = await typeof p;
    "after";
}

//// [awaitUnaryExpression3.js]
function func() {
    return new Promise(function (_resolve) {
        _resolve(__awaiter(__generator(function (_state) {
            switch (_state.label) {
                case 0:
                    "before";
                    return [4 /*yield*/, typeof p];
                case 1:
                    b = _state.sent;
                    "after";
                    return [2 /*return*/];
            }
        })));
    });
    var b;
}
