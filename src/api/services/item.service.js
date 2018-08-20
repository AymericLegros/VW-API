import Items from 'warframe-items'

import { Item } from '../../models'

export default {
  async import (category = ['All']) {
    const warframeItems = new Items({ category })
    warframeItems.pop()
    for (let warframeItem of warframeItems) {
      warframeItem.data = Object.assign({}, warframeItem)
      await Item.create(warframeItem)
    }
    return 'ok'
  }
}