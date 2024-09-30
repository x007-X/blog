import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      jsx
<div className="container mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold mb-6">My Blog</h1>

  {/* Blog Posts */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Single Blog Post */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src="blog-post-image.jpg" // Replace with your image URL
        alt="Blog Post Title" 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">Blog Post Title</h2>
        <p className="text-gray-600 mb-4">
          This is a short preview of the blog post content. 
          It should be concise and engaging.
        </p>
        <a 
          href="#" // Replace with your blog post URL
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Read More
        </a>
      </div>
    </div>

    {/* Repeat the above structure for more blog posts */}
  </div>
</div>

      
    </>
  )
}

export default App
