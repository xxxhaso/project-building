export default function outF () {
  // import不用加花括号
  // export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
  console.log('这是一个公共函数')
}

// 多个函数：
function outF1 () {
  console.log('这是第一个封装函数')
}
function outF2 () {
  console.log('这是一个公共函数')
}
// 注意：暴露的时候使用export{函数名}
export {
  // import导入要加花括号
  // export命令对外接口是有名称的且import命令从模块导入的变量名与被导入模块对外接口的名称相同，而export default命令对外输出的变量名可以是任意的，这时import命令后面，不使用大括号。
  outF1,
  outF2
}
