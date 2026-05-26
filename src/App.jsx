import './App.css'

function App() {
  return (
    <div className="app">
      <header className="nav">
        <div className="brand">
          <div className="logo">π</div>
          <div>
            <h1>Pi Eco Hub</h1>
            <p>轻量级 Pi 生态入口</p>
          </div>
        </div>

        <button className="navButton">连接钱包</button>
      </header>

      <main className="hero">
        <section className="heroText">
          <div className="tag">Pi Network · Eco App · GameFi</div>
          <h2>把 Pi 生态、工具和小游戏装进一个入口</h2>
          <p>
            面向普通用户的轻量级 Pi 生态应用。未来可以扩展成工具导航、小游戏大厅、
            生态任务、用户等级和 Pi 支付场景。
          </p>

          <div className="actions">
            <button className="primary">开始体验</button>
            <button className="secondary">查看路线图</button>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <span>生态状态</span>
            <strong>Beta</strong>
          </div>

          <div className="stats">
            <div>
              <strong>3</strong>
              <span>核心模块</span>
            </div>
            <div>
              <strong>12K+</strong>
              <span>目标用户</span>
            </div>
            <div>
              <strong>π</strong>
              <span>生态符号</span>
            </div>
          </div>
        </section>
      </main>

      <section className="cards">
        <div className="card">
          <h3>生态导航</h3>
          <p>整理 Pi 生态入口、应用、工具和社区资源，降低新用户进入门槛。</p>
        </div>

        <div className="card">
          <h3>小游戏大厅</h3>
          <p>先做轻量小游戏，验证用户活跃，再逐步接入积分、等级和任务系统。</p>
        </div>

        <div className="card">
          <h3>任务系统</h3>
          <p>用签到、邀请、学习任务和生态体验任务，让用户持续回来。</p>
        </div>
      </section>
    </div>
  )
}

export default App