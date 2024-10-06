import React from 'react';
import { Link } from 'react-router-dom'; 

const Blog = () => {
  const blogPosts = [
    { id: 1, title: 'Understanding AGI', date: '2024-10-01', link: '/blogpost1' },
    { id: 2, title: 'The Mysteries of Space', date: '2024-09-28', link: '/blogpost2' },
    { id: 3, title: 'Fusion Energy Revolution', date: '2024-09-15', link: '/blogpost3' },
  ].sort((a, b) => b.id - a.id); // Sort by ID in descending order

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-center">
          <thead>
            <tr>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider">No.</th>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogPosts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap">{post.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={post.link} className="text-blue-600 hover:underline">
                    {post.title}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{post.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blog;
