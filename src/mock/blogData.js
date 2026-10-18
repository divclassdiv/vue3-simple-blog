// 博客文章模拟数据
export const blogList = [
  {
    id: 1,
    title: 'Vue3 组合式API入门总结',
    desc: '本文整理Vue3 setup语法糖的基础用法，包括ref、reactive响应式数据和生命周期钩子的使用。',
    content: 'Vue3 的组合式API是当前前端开发的主流写法，通过setup语法糖可以更简洁地组织代码。\n\nref 用于定义基础类型的响应式数据，reactive 适合定义对象类型。onMounted 是最常用的生命周期钩子，在页面加载完成后执行。',
    category: 'Vue3',
    date: '2024-10-01'
  },
  {
    id: 2,
    title: 'CSS Flex布局完全指南',
    desc: '详解Flex布局的核心属性，主轴、交叉轴对齐方式，以及常见的居中、均分布局实现。',
    content: 'Flex 布局是现代前端布局的首选方案，只需给父元素设置 display:flex 即可开启。\n\njustify-content 控制主轴对齐，align-items 控制交叉轴对齐。flex:1 可以实现元素自动均分剩余空间。',
    category: 'CSS',
    date: '2024-10-05'
  },
  {
    id: 3,
    title: '前端表单验证实现思路',
    desc: '从零实现基础表单验证，包括必填校验、邮箱格式校验和错误提示展示。',
    content: '表单验证是前端最常见的业务场景，核心是正则表达式 + 事件触发。\n\n通常在输入框失去焦点时触发校验，或者表单提交时统一校验。校验不通过时展示对应的错误提示文字。',
    category: 'JavaScript',
    date: '2024-10-10'
  }
]

// 根据文章ID获取详情
export function getBlogById(id) {
  return blogList.find(item => item.id === Number(id))
}
