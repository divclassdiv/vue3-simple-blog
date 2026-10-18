<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBlogById } from '@/mock/blogData.js'

const route = useRoute()
const router = useRouter()
const article = ref(null)

onMounted(() => {
  // 从路由地址里拿到文章id
  const id = route.params.id
  article.value = getBlogById(id)
})

// 返回首页
function goBack() {
  router.push('/home')
}
</script>

<template>
  <div class="detail-page" v-if="article">
    <button class="back-btn" @click="goBack">← 返回首页</button>
    
    <h1 class="article-title">{{ article.title }}</h1>
    
    <div class="article-info">
      <span class="category">{{ article.category }}</span>
      <span class="date">{{ article.date }}</span>
    </div>
    
    <div class="article-content">
      <p v-for="(text, index) in article.content.split('\n\n')" :key="index">
        {{ text }}
      </p>
    </div>
  </div>

  <div v-else class="empty">
    文章不存在
  </div>
</template>

<style scoped>
.back-btn {
  background: none;
  border: none;
  color: #42b883;
  cursor: pointer;
  padding: 0;
  margin-bottom: 20px;
  font-size: 14px;
}

.article-title {
  margin: 0 0 12px 0;
  font-size: 26px;
  color: #333;
}

.article-info {
  display: flex;
  gap: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
  margin-bottom: 24px;
  font-size: 13px;
  color: #999;
}

.category {
  padding: 2px 6px;
  background: #f0f9ff;
  color: #42b883;
  border-radius: 4px;
}

.article-content {
  line-height: 1.8;
  color: #444;
  font-size: 15px;
}

.article-content p {
  margin: 0 0 16px 0;
}

.empty {
  text-align: center;
  padding: 60px 0;
  color: #999;
}
</style>
