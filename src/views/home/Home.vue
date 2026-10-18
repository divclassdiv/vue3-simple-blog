<script setup>
import { blogList } from '@/mock/blogData.js'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home-page">
    <h1 class="page-title">最新文章</h1>
    
    <div class="blog-list">
      <div 
        v-for="item in blogList" 
        :key="item.id" 
        class="blog-card"
      >
        <RouterLink :to="`/detail/${item.id}`" class="blog-title">
          {{ item.title }}
        </RouterLink>
        <div class="blog-info">
          <span class="category">{{ item.category }}</span>
          <span class="date">{{ item.date }}</span>
        </div>
        <p class="blog-desc">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-title {
  margin: 0 0 24px 0;
  font-size: 22px;
  color: #333;
}

.blog-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.blog-card {
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  transition: box-shadow 0.2s;
}

.blog-card:hover {
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

.blog-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  display: block;
  margin-bottom: 8px;
}

.blog-title:hover {
  color: #42b883;
}

.blog-info {
  display: flex;
  gap: 15px;
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
}

.category {
  padding: 2px 6px;
  background: #f0f9ff;
  color: #42b883;
  border-radius: 4px;
}

.blog-desc {
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}
</style>
