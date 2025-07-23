export default function BlogDetail({ blog, onBack }) {
  if (!blog) return null;
  return (
    <div>
      <button onClick={onBack} style={{ marginBottom: 16 }}>返回列表</button>
      <h2>{blog.title}</h2>
      <div style={{ whiteSpace: 'pre-wrap' }}>{blog.content}</div>
    </div>
  );
}
