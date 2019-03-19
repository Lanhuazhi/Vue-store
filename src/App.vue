<template>
    <div class="app-container">
        <!-- 这是头部 Header 部分 -->
        <mt-header fixed title="商城 Vue 项目"></mt-header>

        <!-- 中间的 路由 router-view 区域 -->

        <!-- 底部 Tabber 区域 -->
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
        <h3>123</h3>
    </div>
</template>

<script>

</script>

// 如果使用该属性，则样式仅仅应用到 style 元素的父元素及其子元素。

<style scoped>
    .app-container{
        margin-top:40px;
    }
</style>



