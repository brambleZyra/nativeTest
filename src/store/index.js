// 仓库列表
import Vue from 'vue'
import vuex from 'vuex'
import imgStore from './imgStore.js'/* 图片列表的数据仓库 */

Vue.use(vuex);

// export default new vuex.Store({
// 	state: {
// 		show: false
// 	}
// })

export default new vuex.Store({
	state: {
		footer: true
	},
	mutations: {
		changeFooterState (state, tag) {
			state.footer = tag;
			// 你还可以在这里执行其他的操作改变state
		}
	},
	modules: {
		imgStore: imgStore
	}
})
