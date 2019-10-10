// class Observable {
//     source: any[];
//     result: any;
//     constructor(source: any) {
//         this.source = Array.from(source);
//         this.result = this.source;
//     }
//     public subscribe(next: (value: any) => void, error?: (error) => void, complete?: () => void): void {
//         try {
//             for (let value of this.result) {
//                 next(value);
//             }
//         } catch (err) {
//             if (error) {
//                 error(err);
//             } else {
//                 throw err;
//             }
//         } finally {
//             if (complete) {
//                 complete();
//             }
//         }
//     }
// }
// new Observable('Observable')
//     .subscribe((value) => {
//         console.log(value);
//     }, (error) => {
//         console.log(error);
//     }, () => {
//         console.log('complete');
//     });
// -----------------------------------------------
class Observable {
    constructor(source) {
        this.source = Array.from(source);
        this.result = this.source;
    }
    subscribe(next, error, complete) {
        try {
            for (let value of this.result) {
                next(value);
            }
        }
        catch (err) {
            if (error) {
                error(err);
            }
            else {
                throw err;
            }
        }
        finally {
            if (complete) {
                complete();
            }
        }
    }
    filter(callback) {
        this.result = this.result.filter(callback);
        return this;
    }
    map(callback) {
        this.result = this.result.map(callback);
        return this;
    }
}
new Observable('Observable')
    .map((value) => value.toUpperCase())
    .filter((value) => value > 'H')
    .subscribe((value) => {
    console.log(value);
}, (error) => {
    console.log(error);
}, () => {
    console.log('complete');
});
//# sourceMappingURL=01-observable-class.js.map