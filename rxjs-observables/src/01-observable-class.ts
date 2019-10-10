class Observable {
    source: any[];

    constructor(source: any) {
        this.source = Array.from(source);
    }

    public subscribe(next: (value: any) => void, error?: (error: any) => void, complete?: () => void): void {
        try {
            for (let value of this.source) {
                next(value);
            }
        } catch (err) {
            if (error) {
                error(err);
            } else {
                throw err;
            }
        } finally {
            if (complete) {
                complete();
            }
        }
    }
}

new Observable('Observable')
    .subscribe((value) => {
        console.log(value);
    }, (error) => {
        console.log(error);
    }, () => {
        console.log('complete');
    });

// -----------------------------------------------

// class Observable {
//     source: any;

//     constructor(source: any) {
//         this.source = Array.from(source);
//     }

//     public subscribe(next: (value: any) => void, error?: (error: any) => void, complete?: () => void): void {
//         try {
//             for (let value of this.source) {
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

//     public filter(callback: (value: any) => boolean) {
//         this.source = this.source.filter(callback);
//         return this;
//     }

//     public map(callback: (value: any) => any) {
//         this.source = this.source.map(callback)
//         return this;
//     }
// }

// new Observable('Observable')
//     .map((value) => value.toUpperCase())
//     .filter((value) => value > 'H')
//     .subscribe((value) => {
//         console.log(value);
//     }, (error) => {
//         console.log(error);
//     }, () => {
//         console.log('complete');
//     });



