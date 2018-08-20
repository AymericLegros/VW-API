import { ItemService } from './../../services'
import { ItemManager } from './../../managers'

export default {
  Query: {
    import: async () => await ItemService.import(),
    getOneItemBy: async (_, { filter }) => await ItemManager.getOneBy(filter)
  }
}