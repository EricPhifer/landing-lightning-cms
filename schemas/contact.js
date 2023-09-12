import { TbSection as icon } from 'react-icons/tb';

export default {
    name: 'contact',
    title: 'Contact Information',
    type: 'document',
    icon,
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'streetaddress',
          title: 'Street Address of your Location',
          type: 'string',
        },
        {
          name: 'citystatezip',
          title: 'City, State and Zip',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Contact email',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Contact phone number',
          desciption: 'only include the 10 digits, no dashes or parentheses',
          type: 'string',
        },
    ],
    preview: {
        select: {
          title: 'title',
        },
      },
  }