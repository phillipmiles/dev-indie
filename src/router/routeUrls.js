const routeUrls = {
  home: '/',
  blog: '/blog',
  projects: '/projects',
  about: '/about',
  post: (id) => `/blog/${id ? id : ':id'}`,
};

export default routeUrls;
