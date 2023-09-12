import { TbSection as icon } from 'react-icons/tb';

export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    icon,
    fields: [
        {
          name: 'name',
          title: 'Name of the Person Being Quoted',
          type: 'string',
        },
        { 
            name: 'content', 
            title: 'Content', 
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'image', 
            title: 'Profile Image', 
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
        }
    ],
    preview: {
        select: {
          title: 'name',
        },
      },
  }