import got from 'got';
import { Upload } from './models'

import WarframeVersion from "warframe-updates";

const warframeVersion = new WarframeVersion()

warframeVersion.on("update", async update => {
  console.log('update', update)
  await Upload.create(update)
})

let getWorldstate = async () => {
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

// getWorldstate()
