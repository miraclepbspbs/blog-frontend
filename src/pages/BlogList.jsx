import { useEffect } from 'react';

export default function BlogList({ blogs, onSelect, onGoAdd }) {
  useEffect(() => {}, [blogs]);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>博客列表</h2>
        <button onClick={onGoAdd}>添加博客</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {blogs.length === 0 && <li>暂无博客</li>}
        {blogs.map(blog => (
          <li key={blog._id} style={{ marginBottom: 12 }}>
            <a
              href="#"
              style={{ fontSize: 18, color: '#1677ff', textDecoration: 'underline', cursor: 'pointer' }}
              onClick={() => onSelect(blog)}
            >
              {blog.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
