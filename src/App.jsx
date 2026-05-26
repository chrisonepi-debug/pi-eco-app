import { useState } from 'react'
import './App.css'

const modules = [
  {
    id: 'home',
    label: '首页',
    title: 'Pi Eco Hub',
    desc: '一个轻量级 Pi 生态入口，把工具、游戏、任务和生态资源集中到一个 App 里。',
  },
  {
    id: 'games',
    label: '游戏',
    title: '小游戏大厅',
    desc: '先用轻量小游戏验证用户活跃，再逐步接入积分、等级、排行和 Pi 支付场景。',
  },
  {
    id: 'tasks',
    label: '任务',
    title: '任务中心',
    desc: '通过签到、学习、邀请、体验生态等任务，让用户每天都有理由回来。',
  },
  {
    id: 'tools',
    label: '工具',
    title: '生态工具箱',
    desc: '收集 Pi 生态常用入口、节点工具、钱包指南、交易提醒和新手教程。',
  },
]

const games = [
  { name: 'Pi Snake', status: '规划中', reward: '+20 XP' },
  { name: 'Memory Card', status: '规划中', reward: '+15 XP' },
  { name: 'Lucky Spin', status: '概念版', reward: '+10 XP' },
]

const tasks = [
  { name: '每日签到', detail: '每天打开 App 完成签到', xp: '+5 XP' },
  { name: '学习 Pi 钱包', detail: '完成钱包安全教程', xp: '+20 XP' },
  { name: '体验生态入口', detail: '访问一个 Pi 生态应用', xp: '+15 XP' },
]

const tools = [
  'Pi 钱包入口',
  '节点状态记录',
  '生态应用导航',
  '新手教程中心',
]

function App() {
  const [active, setActive] = useState('home')
  const current = modules.find((item) => item.id === active)

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="logo">π</div>
          <div>
            <h1>Pi Eco Hub</h1>
            <p>轻量级 Pi 生态入口</p>
          </div>
        </div>

        <button className="walletButton">连接钱包</button>
      </header>

      <main className="main">
        <section className="heroCard">
          <div className="badge">Pi Network · Eco App · GameFi</div>
          <h2>{current.title}</h2>
          <p>{current.desc}</p>

          <div className="heroActions">
            <button onClick={() => setActive('games')}>进入游戏大厅</button>
            <button onClick={() => setActive('tasks')}>查看任务</button>
          </div>
        </section>

        <section className="statusCard">
          <div className="statusHeader">
            <span>生态状态</span>
            <strong>Beta</strong>
          </div>

          <div className="statusList">
            <div>
              <strong>4</strong>
              <span>核心页面</span>
            </div>
            <div>
              <strong>3</strong>
              <span>小游戏规划</span>
            </div>
            <div>
              <strong>π</strong>
              <span>生态符号</span>
            </div>
          </div>
        </section>
      </main>

      <section className="content">
        {active === 'home' && (
          <div className="grid">
            {modules.slice(1).map((item) => (
              <button
                className="featureCard"
                key={item.id}
                onClick={() => setActive(item.id)}
              >
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </button>
            ))}
          </div>
        )}

        {active === 'games' && (
          <div className="grid">
            {games.map((game) => (
              <div className="featureCard" key={game.name}>
                <div className="cardTop">
                  <h3>{game.name}</h3>
                  <span>{game.status}</span>
                </div>
                <p>轻量化小游戏模块，后续可接入排行榜、等级和奖励体系。</p>
                <strong>{game.reward}</strong>
              </div>
            ))}
          </div>
        )}

        {active === 'tasks' && (
          <div className="taskList">
            {tasks.map((task) => (
              <div className="taskItem" key={task.name}>
                <div>
                  <h3>{task.name}</h3>
                  <p>{task.detail}</p>
                </div>
                <strong>{task.xp}</strong>
              </div>
            ))}
          </div>
        )}

        {active === 'tools' && (
          <div className="toolGrid">
            {tools.map((tool) => (
              <button className="toolButton" key={tool}>
                {tool}
              </button>
            ))}
          </div>
        )}
      </section>

      <nav className="bottomNav">
        {modules.map((item) => (
          <button
            key={item.id}
            className={active === item.id ? 'active' : ''}
            onClick={() => setActive(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App