export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61438579d314790e9d2e300f',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-h3j6atms',
                  apiId: '5a67bdd4-abe5-4689-8023-693ff3ea5cc8'
                },
                {
                  buildHookId: '61438579ca5b300a2d7c0882',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-9qmjwx6u',
                  apiId: '308db01c-e4e2-4d37-9b68-777b12c97d8d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pat-cki/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-9qmjwx6u.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
