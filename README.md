# Pokemon信息查询应用

这是一个使用Vue 3和UnoCSS构建的现代化Pokemon信息查询应用，通过调用PokéAPI获取精灵宝可梦的详细信息并展示。


## 安装说明

### 环境要求

- Node.js >= 16.x
- npm 或 yarn

## 使用说明

1. 在搜索框中输入Pokemon的英文名称（例如：pikachu, charizard, bulbasaur）
2. 应用会实时显示搜索结果，包括：
   - Pokemon名称（首字母大写）
   - ID编号
   - 类型标签（带颜色区分）
   - 官方艺术图
3. 点击右上角的月亮/太阳图标可以切换亮暗模式
4. 点击顶部导航栏的GitHub和Bilibili图标访问相关页面
5. 在底部Footer区域可以看到作者信息

## 项目结构

```
Pokemen-info/
├── hooks/
│   └── usePokemon.ts           # 自定义Hook，处理Pokemon数据获取和防抖逻辑
├── public/                     # 静态资源文件
│   ├── avatar.webp             # 作者头像
│   ├── github.svg              # GitHub图标
│   ├── bilibili-color.svg      # Bilibili图标
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.vue          # 顶部导航栏组件
│   │   └── Footer.vue          # 底部信息组件
│   ├── App.vue                 # 主应用组件
│   ├── main.ts                 # 应用入口文件
│   └── style.css               # 全局样式
├── types/                      # TypeScript类型定义
│   └── pokemon.ts              # Pokemon相关类型定义
├── uno.config.ts               # UnoCSS配置文件
├── vite.config.ts              # Vite配置文件
└── package.json                # 项目依赖和脚本配置
```
## API接口

本项目使用 [PokéAPI](https://pokeapi.co/) 获取Pokemon数据，API端点为：
`https://pokeapi.co/api/v2/pokemon/{pokemon_name}`
- `pokemon_name` 为Pokemon的中文名称（例如："妙蛙种子"）

## 贡献指南

1. Fork项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启Pull Request

## 许可证

此项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 致谢

- 感谢 [PokéAPI](https://pokeapi.co/) 提供的免费API服务
- 感谢 Vue 3 和 UnoCSS 社区提供的优秀工具
- 感谢所有开源贡献者