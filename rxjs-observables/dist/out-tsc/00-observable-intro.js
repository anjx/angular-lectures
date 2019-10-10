// for (const letter of 'Observable') {
//     console.log(letter); // O b s e r v a b l e
// }
// -----------------------------------------------
// function observe(observable: any) {
//     for (const value of observable) {
//         console.log(value);
//     }
// }
// observe('Observable') // O b s e r v a b l e
// -----------------------------------------------
// function observe(observable: any, next?: (value: any) => void) {
//     for (const value of observable) {
//         next(value);
//     }
// }
// observe('Observable', (value) => {
//     console.log(value); // O b s e r v a b l e
// });
// -----------------------------------------------
// function observe(observable: any, next?: (value: any) => void, complete?: () => void) {
//     for (const value of observable) {
//         next(value);
//     }
//     complete();
// }
// observe('Observable', (value) => {
//     console.log(value); // O b s e r v a b l e
// }, () => {
//      console.log('complete');
// }); // O b s e r v a b l e complete
// -----------------------------------------------
// function observe(observable: any, next?: (value: any) => void, error?: (error) => void, complete?: () => void) {
//     try {
//         throw new Error('whoops');
//         for (const value of observable) {
//             next(value);
//         }
//     } catch(err) {
//         error(err);
//     } finally {
//         complete();
//     }
// }
// observe('Observable', (value) => {
//     console.log(value); // ignored
// }, (error) => {
//     console.log(error); // Whoops
// }, () => {
//     console.log('complete'); // complete
// });
//# sourceMappingURL=00-observable-intro.js.map