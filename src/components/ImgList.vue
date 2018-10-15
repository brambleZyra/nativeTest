<template>
	<div id="imgListPage">
		<ul>
			<li v-for="(item, key, index) in imgList" :key="index">
					<img :src="item">
					<span class="test">66666666</span>
			</li>
		</ul>
		<!-- <a href="javascript:;" @click="$store.commit('changeState');">点击</a> -->
	</div>
</template>

<script>
// import '../../static/js/test.js' // 注意路径
// import { test } from '@static/js/test.js' // 注意路径
import { mapState, mapActions } from 'vuex'

export default{
	name: 'ImgList',
	data () {
		return {
			imgList: [
				require('../assets/images/exclamatory.png'),
				require('../assets/images/exclamatory.png'),
				require('../assets/images/exclamatory.png')
			]
		}
	},
	async mounted () {
		console.log('获取前');
		console.log(this.$store.state.imgStore.imgList);
		await this.$store.dispatch('refreshImgList');
		console.log('后');
		console.log(this.$store.state.imgStore.imgList);

		// console.log(this.$store);
		// // this.$store.commit('changeFooterState', false); // 隐藏底部导航栏
		// test();
		// console.log('------------------------');
		// console.log(this.$store);
		// console.log(this.$store.state.imgStore);
		// console.log(this.$store.state.imgStore.show);
		// console.log('this.$store.getters.not_show:::::::::::::::::::' + this.$store.getters.not_show);
		// const _this = this;
		// setTimeout(function () {
		// 	// _this.$store.commit('changeState');
		// 	// _this.$store.dispatch('changeState');
		// 	_this.change();	// 等于this.$store.dispatch('changeState')`
		// 	console.log(_this.$store.state.imgStore.show);
		// 	console.log('this.$store.getters.not_show:::::::::::::::::::' + _this.$store.getters.not_show);
		// 	console.log('testShowTag === state.imgStore.show  ::::::::::::::::::::::::::::::::' + _this.testShowTag);
		// }, 1000);
	},
	methods: {
		...mapActions([
			'changeState' // 将 `this.changeState()` 映射为 `this.$store.dispatch('changeState')`
		]),
		...mapActions({
			change: 'changeState' // 将 `this.add()` 映射为 `this.$store.dispatch('changeState')`
		})
	},
	computed: {
		...mapState({
			testShowTag: state => state.imgStore.show
		})
	}
}
</script>

<style>

</style>
