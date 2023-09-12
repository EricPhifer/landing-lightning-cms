import { TbSection as icon } from 'react-icons/tb';

export default {
    name: 'social',
    title: 'Social Media',
    type: 'document',
    icon,
    fields: [
        {
          name: 'title',
          title: 'Social Media Platform',
          type: 'string',
        },
        {
            name: 'image', 
            title: 'Background Image', 
            type: 'image',
            options: {
                hotspot: true
            } 
        },
        {
          name: 'alt',
          title: 'Alternative Text for Image',
          type: 'string',
        },
        {
          name: 'source',
          title: 'Credit to the Creator or Owner of the Image',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Link to Your Social Media Page',
          type: 'string',
        },
    ],
    preview: {
        select: {
          title: 'title',
        },
      },
  }