const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credencials.json')

const doc = new GoogleSpreadsheet('1lDs2FE1VugS0hMlV7Vy-DCO7cTagFtAmHwRx2njOaA8')

const run = async () => {
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  console.log(doc.title)
}
run()