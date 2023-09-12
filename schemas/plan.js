import { TbSection as icon } from 'react-icons/tb';

export default {
    name: 'plan',
    title: 'Section with a stepped plan',
    type: 'document',
    icon,
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        { 
            name: 'stepofplan', 
            title: 'Steps in the plan', 
            type: 'array',
            of: [{type: 'PlanSteps'}]
        },
     
    ],
    preview: {
        select: {
          title: 'title',
        },
      },
  }