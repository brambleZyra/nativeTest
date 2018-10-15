<template>
	<div id="homePage">
		<ul class="clearfix">
			<li v-for="(item,index) in newList" :key="index">
					<div class="img-content">
						<div class="img-box">
							<img :src="item.thumbnail_pic_s">
						</div>
					</div>
					<div class="info">
						<span>{{item.title}}</span>
						<span>{{item.date}}</span>
						<span>{{item.author_name}}</span>
					</div>
			</li>
		</ul>
	</div>
</template>
<style scoped="">
	ul{}
	li{ width: 50%; float: left; overflow: hidden; box-sizing: border-box; border:1px solid #ddd;}
	.img-content{width: 100%;padding-bottom: 100%; position: relative;}
	.img-box{ position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; }
	.img-box{display: flex; align-items: center; text-align: center; justify-content: center; }
	.img-box img{max-height: 100%; max-width: 100%; width: auto; height: auto;}
	.info{ height: 60px;overflow: hidden; }
</style>
<script>
	import '@/js/mockData' // 新闻列表数据
	import { postRequest } from '@/js/axios'

	export default {
		data () {
			return {
				newList: []
			}
		},
		async mounted () {
			console.log('图像列表');
			console.log(this.$store.state.imgStore.imgList);
			/* eslint-disable */
			testRequire();
			/* eslint-enable */
			postRequest('/news/index')
			.then(res => {
				// console.log(res);
				this.newList = res.articles;
			});
		}
	}
</script>
