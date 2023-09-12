export default {
    name: 'PlanSteps',
    title: 'Steps to Plan',
    type: 'object',
    fields: [
        { 
            name: 'content', 
            title: 'Content', 
            type: 'array',
            of: [{type: 'block'}]
        },
        {
          name: 'stepnumber',
          title: 'Number Associated with Step',
          type: 'string',
        },
    ]
}