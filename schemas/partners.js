import { TbSection as icon } from 'react-icons/tb';

export default {
    name: 'partners',
    title: 'Partners of the Non-Profit',
    type: 'document',
    icon,
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        { 
            name: 'listpartners', 
            title: 'List of All Partners', 
            type: 'array',
            of: [{type: 'PartnerInfo'}]
        },
     
    ],
    preview: {
        select: {
          title: 'title',
        },
      },
  }