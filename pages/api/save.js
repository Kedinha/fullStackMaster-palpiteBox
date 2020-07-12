import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import credentials from '../../credencials.json'

const doc = new GoogleSpreadsheet('1lDs2FE1VugS0hMlV7Vy-DCO7cTagFtAmHwRx2njOaA8')
const genCupom = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSSS')).toString(16).toLocaleUpperCase()
  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}
export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1] //segunda planilha
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A3:B3')

    const mostrarPromocaoCell = sheetConfig.getCell(2, 0)
    const textoCell = sheetConfig.getCell(2, 1)

    let Cupom = ''
    let Promo = ''

    if (mostrarPromocaoCell.value === 'VERDADEIRO') {
      //TODO gerar cupom
      Cupom = genCupom()
      Promo = textoCell.value
    }

    //Nome	Email	Whatsapp	Cupom	Promo
    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:ss'),
      Nota: 5,
      Cupom,
      Promo
    })
    res.end(req.body)
  } catch (err) {
    console.log(err)
    res.end('error')
  }
}
