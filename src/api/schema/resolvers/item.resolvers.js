import { ItemService } from './../../services'

export default {
  Query: {
    import: () => ItemService.import()
  }
}