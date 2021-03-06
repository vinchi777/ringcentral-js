// Generated by typings
// Source: https://raw.githubusercontent.com/asvetliakov/typings-sinon-chai/682cac889ed0c16e51a02cafea42c471fbdd956c/chai.d.ts
declare module '~sinon-chai/chai' {
import '~chai/lib/Assertion';


module '~chai/lib/Assertion' {
    interface LanguageChains {
        always: Assertion;
    }

    interface Assertion {
        /**
         * true if the spy was called at least once.
         */
        called: Assertion;
        /**
         * @param count The number of recorded calls.
         */
        callCount(count: number): Assertion;
        /**
         * true if the spy was called exactly once.
         */
        calledOnce: Assertion;
        /**
         * true if the spy was called exactly twice.
         */
        calledTwice: Assertion;
        /**
         * true if the spy was called exactly thrice.
         */
        calledThrice: Assertion;
        /**
         * Returns true if the spy was called before anotherSpy.
         */
        calledBefore(anotherSpy: Function): Assertion;
        /**
         * Returns true if the spy was called after anotherSpy.
         */
        calledAfter(anotherSpy: Function): Assertion;
        /**
         * Returns true if spy/stub was called with the new operator. Beware that
         * this is inferred based on the value of the this object and the spy
         * function's prototype, so it may give false positives if you actively
         * return the right kind of object.
         */
        calledWithNew: Assertion;
        /**
         * Returns true if context was this for this call.
         */
        calledOn(context: any): Assertion;
        /**
         * Returns true if call received provided arguments (and possibly others).
         */
        calledWith(...args: any[]): Assertion;
        /**
         * Returns true if call received provided arguments and no others.
         */
        calledWithExactly(...args: any[]): Assertion;
        /**
         * Returns true if call received matching arguments (and possibly others).
         * This behaves the same as spyCall.calledWith(sinon.match(arg1), sinon.match(arg2), ...).
         */
        calledWithMatch(...args: any[]): Assertion;
        /**
         * Returns true if spy returned the provided value at least once. Uses
         * deep comparison for objects and arrays. Use spy.returned(sinon.match.same(obj))
         * for strict comparison (see matchers).
         */
        returned(obj: any): Assertion;
        /**
         * Returns true if spy threw the provided exception object at least once.
         */
        thrown(obj?: Error|typeof Error|string): Assertion;
    }
}

export {}
}
declare module 'sinon-chai/chai' {
export * from '~sinon-chai/chai';
}

// Generated by typings
// Source: https://raw.githubusercontent.com/asvetliakov/typings-sinon-chai/682cac889ed0c16e51a02cafea42c471fbdd956c/index.d.ts
declare module '~sinon-chai/index' {
import '~sinon-chai/chai';

function sinonChai(chai: any, utils: any): void;
namespace sinonChai { }
export = sinonChai;
}
declare module 'sinon-chai/index' {
import main = require('~sinon-chai/index');
export = main;
}
declare module 'sinon-chai' {
import main = require('~sinon-chai/index');
export = main;
}
