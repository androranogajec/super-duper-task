
// task number 3
const arr =[1, 0, 10, '0', '1','', NaN, false, null, undefined,'false', 'true'];
for(i = 0; i < arr.length; i++) {
    if(Boolean(arr[i])) {
        console.log(arr[i]);
    };
  }