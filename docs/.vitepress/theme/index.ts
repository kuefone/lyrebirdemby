// docs/.vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme';
import './style.css'; // <<-- 这一行是关键！它导入了你的自定义样式

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  // 您的主题配置
};