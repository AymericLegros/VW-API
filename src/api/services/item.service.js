import Items from 'warframe-items'

export default {
  import (category = ['All']) {
    console.log('ert')
    const items = new Items({ category })
    console.log('items ===>>>>>', items)
    return 'ok'
  }
}