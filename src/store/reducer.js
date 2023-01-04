const defaultState = {
    language: 'en'
}  //默认数据

const store = (state = defaultState, action) => {  //就是一个方法函数

    if (action.type === 'changeLanguage') {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.language = action.value
        return newState
    }

    return state
}

export default store