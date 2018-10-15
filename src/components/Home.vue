<template>
	<div id="homePage">
		<transition name="fade">
			<router-view  class="view-main"/>
		</transition>
		<footer>
			<ul class="nav">
				<li :class="seleted('workspace') ? 'on' : ''"><router-link name="workspace" class="item" to="/workspace">首页</router-link></li>
				<li :class="seleted('imgList') ? 'on' : ''"><router-link name="imgList" class="item" to="/imgList">图像</router-link></li>
				<li :class="seleted('user') ? 'on' : ''"><router-link name="user" class="item" to="/">我的</router-link></li>
			</ul>
		</footer>
	</div>
</template>
<style scoped="">
	.nav{display: flex; height: 50px;line-height: 50px; flex-direction:row; flex-wrap: nowrap;justify-content:space-between;border-top: 1px solid #ddd; box-sizing: border-box; position:fixed;bottom: 0;left: 0;right: 0;background:#fff;}
	.nav li{flex: 1 2 auto;text-align: center;}
	.nav li a{display:block;}
</style>
<script>
	export default {
		name: 'Home',
		data () {
			return {
			}
		},
		async mounted () {
		},
		methods: {
			seleted (name) {
				// alert(this.$route.path);
				if (this.$route.path.indexOf(name) > -1) {
					return true;
				} else {
					return false;
				}
			}
		}
	}
</script>
