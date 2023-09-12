import { GiFootprint as icon } from 'react-icons/gi';

export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    icon,
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'dev', 
          title: 'Design & Development Credit', 
          type: 'string' 
        },
        {
          name: 'devlink', 
          title: 'URL for Developer', 
          type: 'url' 
        },
        {
          name: 'links',
          title: 'Links to Pages',
          type: 'array',
          of: [
            {type: 'PageLinks'}
          ],
        }
    ],
  }