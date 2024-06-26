import { TExcelHead } from "./vars"

export type TExcelJson = {
  [key in TExcelHead]: string
}

export function fixExcelJson(excelJson: TExcelJson[]) {
  const excelMapped = excelJson.map(value => {
    const newVal = Object.entries(value).filter(([key]) => key !== "")

    const newValJson: {[x: string]: string} = {}

    newVal.forEach(val => {
      newValJson[val[0]] = !val[1] ? null : `${val[1]}`
    })

    return newValJson
  })

  // console.log(excelMapped)

  const excel = excelMapped.slice(2)

  return excel as IBook[]
}

export function isJsonNull(json: IBook) {
  const numberOfKeys = Object.keys(json)
  let keysNull = 0

  Object.values(json).forEach(val => {
    if (!val || val.trim() == "") {
      keysNull++
    }
  })

  return keysNull === numberOfKeys.length
}