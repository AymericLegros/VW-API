import got from 'got';

export default {
  async getWorldstate () {
    try {
      const response = await got('http://content.warframe.com/dynamic/worldState.php');
      console.log(JSON.parse(response.body).WorldSeed);
      //=> '<!doctype html> ...'
      setTimeout(() => {
        getWorldstate()
      }, 15000)
    } catch (error) {
      console.log(error.response.body)
    }
  }
}