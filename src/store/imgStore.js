import '@/js/mockData'
import { postRequest } from '@/js/axios'

export default {
  state: {
      show: false,
      imgList: []
  },
  // 我们在组件中使用 $store.state.imgStore.show 来获得状态 show , 类似的 , 我们可以使用 $store.getters.not_show 来获得状态 not_show 。

	// 注意 : $store.getters.not_show 的值是不能直接修改的 , 需要对应的 state 发生变化才能修改。
  getters: {
		not_show (state) {
			return !state.show;
		}
  },
	// 变更状态
	// 同步 对应 commit
  mutations: {
		changeState (state) {
			state.show = state.show ? false : true;
			// 你还可以在这里执行其他的操作改变state
		},
		updateImgList (state, imgList) {
			state.imgList = imgList;
		}
  },
  // 异步 对应 dispatch
  actions: {
		changeState (context) {
			context.commit('changeState');
			// 你还可以在这里触发其他的mutations方法
		},
		async refreshImgList (context) {
			const imgList = await postRequest('/news/index');
			// console.log(imgList);
			context.commit('updateImgList', imgList);
		}
  }
}
