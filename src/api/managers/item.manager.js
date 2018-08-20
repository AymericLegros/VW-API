import { Item } from '../../models'

export default {
  getOneBy: async (where) => await Item.findOne({ where })
}