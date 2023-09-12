import { TbSection as icon } from 'react-icons/tb';

export default {
    name: 'planwithimage',
    title: 'Section with a stepped plan and images',
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
            of: [{type: 'PlanStepsWithImage'}]
        },
     
    ],
    preview: {
        select: {
          title: 'title',
        },
      },
  }