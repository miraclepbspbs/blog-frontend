export default function BlogAdd({ title, setTitle, content, setContent, loading, onSubmit, onGoList }) {
  return (
    <div>
      <button onClick={onGoList} style={{ marginBottom: 16 }}>返回列表</button>
      <h2>添加博客</h2>
      <form onSubmit={onSubmit} style={{ marginBottom: 24 }}>
        <div>
          <input
            type="text"
            placeholder="标题"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            style={{ width: '100%', marginBottom: 8 }}
          />
        </div>
        <div>
          <textarea
            placeholder="内容"
            value={content}
            onChange={e => setContent(e.target.value)}
            required
            style={{ width: '100%', height: 80, marginBottom: 8 }}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? '提交中...' : '提交'}
        </button>
      </form>
    </div>
  );
}
