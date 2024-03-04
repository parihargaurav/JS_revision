for ( var i = 0; i< 10 ; i++)
{
    setTimeout(()=> console.log(i), 0);
}
// output : will be 10's 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// because the var variable makes global execution context.
// so that's why the output has 10 not as 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 as this will output in let variable and const