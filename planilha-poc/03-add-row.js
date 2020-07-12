const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credencials.json')

const doc = new GoogleSpreadsheet('1lDs2FE1VugS0hMlV7Vy-DCO7cTagFtAmHwRx2njOaA8')

const run = async () => {
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[1] //segunda planilha
  //Nome	Email	Whatsapp	Cupom	Promo
  await sheet.addRow({
    Nome: 'Kédma Costa',
    Email: 'kedmaservices@gmail.com',
    Whatsapp: 'whats',
    Cupom: 'aaakkkk',
    Promo: 'pragramarcomigo'
  })

  console.log(doc.title)
}
run()