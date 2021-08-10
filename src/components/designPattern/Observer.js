const observe = (function () {
  // 容器存放所有观察者
  const message = {}
  return {
    // 注册观察者
    on: function () {
      if (arguments.length !== 2) throw new Error('该函数需要两个参数, 参数1为函数名称的字符串, 参数2为一个回调函数')
      message[arguments[0]] = arguments[1]
    },
    // 发布信息
    emit: function () {
      if (arguments.length < 1 || arguments.length > 2) throw new Error('该函数参数1需要一个函数字符串名称(必须), 携带的参数或对象(可选)')
      for (const key in message) {
        if (key === arguments[0]) message[key](arguments[1] || undefined)
      }
    },
    // 移除观察者
    off: function () {
      debugger
      if (arguments.length !== 1) throw new Error('该函数需要一个函数字符串名称(必须)')

      for (const key in message) {
        if (key === arguments[0]) delete message[key]
      }
      console.log('message', message)
    }
  }
})()
export {
  observe
}
