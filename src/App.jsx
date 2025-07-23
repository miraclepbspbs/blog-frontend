import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import BlogList from './pages/BlogList';
import BlogAdd from './pages/BlogAdd';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}

function MainRoutes() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || '';
  const fetchBlogs = () => {
    fetch(`${API_URL}/api/blogs`)
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(() => setBlogs([]));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setLoading(true);
    await fetch(`${API_URL}/api/blogs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
    setTitle('');
    setContent('');
    setLoading(false);
    fetchBlogs();
    navigate('/');
  };

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <Routes>
        <Route path="/" element={
          <BlogList
            blogs={blogs}
            onSelect={blog => navigate(`/detail/${blog._id}`)}
            onGoAdd={() => navigate('/add')}
          />
        } />
        <Route path="/add" element={
          <BlogAdd
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            loading={loading}
            onSubmit={handleSubmit}
            onGoList={() => navigate('/')}
          />
        } />
        <Route path="/detail/:id" element={<BlogDetailWrapper blogs={blogs} />} />
      </Routes>
    </div>
  );
}

function BlogDetailWrapper({ blogs }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(b => b._id === id);
  return <BlogDetail blog={blog} onBack={() => navigate('/')} />;
}

export default App;
