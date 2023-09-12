export default {
    name: 'PartnerInfo',
    title: 'Partners for Non-Profit',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name of Business or Organization',
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
            title: 'A link to the partners website',
            description: 'This should start with https:// and end with a top level domain (e.g. .com, .net, etc)',
            type: 'string',
        },
    ]
}