export default {
  widgets: [
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
                  buildHookId: '623ade0da3ddca2a1aa9b785',
                  title: 'Sanity Studio',
                  name: 'niva-wiki-studio',
                  apiId: '930c73dc-087f-40a7-aeb5-70ce3576ef71'
                },
                {
                  buildHookId: '623ade0db9c7b42b4e413825',
                  title: 'Blog Website',
                  name: 'niva-wiki',
                  apiId: '3077959c-bf74-4c9b-b052-7e32cc23f748'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jemmima/niva-wiki',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://niva-wiki.netlify.app', category: 'apps'}
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
