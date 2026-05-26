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

const initialTasks = [
  {
    id: 1,
    name: '每日签到',
    detail: '每天打开 App 完成签到',
    xp: 5,
    done: false,
  },
  {
    id: 2,
    name: '学习 Pi 钱包',
    detail: '完成钱包安全教程',
    xp: 20,
    done: false,
  },
  {
    id: 3,
    name: '体验生态入口',
    detail: '访问一个 Pi 生态应用',
    xp: 15,
    done: false,
  },
  {
    id: 4,
    name: '进入游戏大厅',
    detail: '查看小游戏大厅规划',
    xp: 10,
    done: false,
  },
]

const tools = [
  'Pi 钱包入口',
  '节点状态记录',
  '生态应用导航',
  '新手教程中心',
]

function App() {
  const [active, setActive] = useState('home')
  const [xp, setXp] = useState(0)
  const [streak, setStreak] = useState(1)
  const [tasks, setTasks] = useState(initialTasks)

  const current = modules.find((item) => item.id === active)
  const completedTasks = tasks.filter((task) => task.done).length
  const level = Math.floor(xp / 50) + 1
  const nextLevelXp = level * 50
  const progress = Math.min((xp / nextLevelXp) * 100, 100)

  function completeTask(taskId) {
    setTasks((oldTasks) =>
      oldTasks.map((task) => {
        if (task.id !== taskId || task.done) {
          return task
        }

        setXp((oldXp) => oldXp + task.xp)
        return {
          ...task,
          done: true,
        }
      }),
    )
  }

  function handleNav(target) {
    setActive(target)

    if (target === 'games') {
      completeTask(4)
    }
  }

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

      <section className="profileBar">
        <div>
          <span>用户等级</span>
          <strong>Lv.{level}</strong>
        </div>

        <div>
          <span>当前 XP</span>
          <strong>{xp} XP</strong>
        </div>

        <div>
          <span>连续签到</span>
          <strong>{streak} 天</strong>
        </div>

        <div>
          <span>完成任务</span>
          <strong>
            {completedTasks}/{tasks.length}
          </strong>
        </div>
      </section>

      <main className="main">
        <section className="heroCard">
          <div className="badge">Pi Network · Eco App · GameFi</div>
          <h2>{current.title}</h2>
          <p>{current.desc}</p>

          <div className="levelBox">
            <div>
              <span>距离下一级</span>
              <strong>{nextLevelXp - xp} XP</strong>
            </div>
            <div className="progressTrack">
              <div
                className="progressFill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="heroActions">
            <button onClick={() => handleNav('games')}>进入游戏大厅</button>
            <button onClick={() => handleNav('tasks')}>查看任务</button>
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
              <strong>{completedTasks}</strong>
              <span>已完成任务</span>
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
                onClick={() => handleNav(item.id)}
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
              <div className={task.done ? 'taskItem done' : 'taskItem'} key={task.id}>
                <div>
                  <h3>{task.name}</h3>
                  <p>{task.detail}</p>
                </div>

                <div className="taskRight">
                  <strong>+{task.xp} XP</strong>
                  <button
                    disabled={task.done}
                    onClick={() => completeTask(task.id)}
                  >
                    {task.done ? '已完成' : '完成'}
                  </button>
                </div>
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
            onClick={() => handleNav(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App