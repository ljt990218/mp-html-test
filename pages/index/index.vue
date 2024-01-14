<template>
	<view class="content">
		<mp-html :content="html" @fullscreenchange="fullscreenchange" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 				html: `<p><img style="width: 100%; height:100%" src="https://cdn-document-huoshan.orange-classroom.com/document/20230314092354_2339329481678757034234_1.jpg" /></p>
			// <p><img style="width: 100%; height:100%" src="https://cdn-document-huoshan.orange-classroom.com/document/20230314092354_2339329481678757034234_2.jpg" /></p>
			// <p>1231243213y612u73612783612783618</p>
			// <p><img style="width: 100%; height:100%" src="https://cdn-document-huoshan.orange-classroom.com/document/20230314092354_2339329481678757034234_3.jpg" /></p>`
			// html: '<p><img style="height:200px" src="https://th.bing.com/th?id=OIP.YmBnwfkMgzoyYCS7THLfYwHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" /></p>'
			html: `<div><video  id="video" src='https://media.w3.org/2010/05/sintel/trailer.mp4' /></div><div><video src='https://media.w3.org/2010/05/sintel/trailer.mp4' id="video2" /></div>`
		}
	},
	methods: {
		fullscreenchange(e) {
			console.log(e);
		}
	}
}
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>