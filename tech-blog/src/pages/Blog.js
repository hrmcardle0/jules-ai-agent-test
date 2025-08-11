import React from 'react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Cloud Computing',
    date: '2023-10-26',
    content:
      'Cloud computing is constantly evolving, with new services and technologies emerging all the time. In this post, we\'ll explore some of the most exciting trends in cloud computing, including serverless, containers, and edge computing.',
  },
  {
    id: 2,
    title: 'Getting Started with Machine Learning on AWS',
    date: '2023-10-20',
    content:
      'Amazon Web Services (AWS) provides a wide range of services for machine learning, from pre-trained models to fully managed platforms. In this post, we\'ll walk you through the process of building and deploying your first machine learning model on AWS.',
  },
  {
    id: 3,
    title: 'A Deep Dive into Kubernetes',
    date: '2023-10-15',
    content:
      'Kubernetes is an open-source container orchestration platform that has become the de facto standard for deploying and managing containerized applications. In this post, we\'ll take a deep dive into the architecture of Kubernetes and explore some of its key features.',
  },
  {
    id: 4,
    title: 'The Rise of Generative AI',
    date: '2023-10-10',
    content:
      'Generative AI is a type of artificial intelligence that can create new content, such as text, images, and music. In this post, we\'ll explore the technology behind generative AI and discuss some of its potential applications.',
  },
  {
    id: 5,
    title: 'Building a Serverless API with Azure Functions',
    date: '2023-10-05',
    content:
      'Azure Functions is a serverless compute service that allows you to run code on-demand without having to provision or manage servers. In this post, we\'ll show you how to build a serverless API with Azure Functions and connect it to a database.',
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p className="post-date">{post.date}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
