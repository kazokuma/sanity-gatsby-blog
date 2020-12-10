export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd2804e7fd0da08f9ab42bf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wcy8qnmj',
                  apiId: 'a00eff58-b459-47e7-b2ae-13fce9013c10'
                },
                {
                  buildHookId: '5fd2804e70f7a74886ad4042',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4csggruq',
                  apiId: '894fb5e3-0870-4a77-8d3e-89666012314a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kazokuma/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4csggruq.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
