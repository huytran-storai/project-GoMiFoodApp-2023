import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    {
      name:'name',
      type:'string',
      title:'Dishes Name',
      validation: rule => rule.required()
    },
    {
      name:'description',
      type:'string',
      title:'Dishes description',
      validation: rule => rule.required()
    },
    {
      name: 'image', 
      type: 'image',
      title: 'Image of the dish'
    },
    {
      name:'price',
      type:'number',
      title:'Price of the dishes',
      // inputComponent: CustomPriceInput,
    }
  ],
})
