import {IPerson} from './person.interface'
import {readData, writeData} from './person.services'
import {Status} from '../enum/person.status'

const filePath: string = 'data.json'

export function getPeopleData (property?: string) {
  let dataWithDate: IPerson [] = []
  let date = new Date()
  try{
    const dataJson = readData(filePath)
    /*Iterating through the array and adding date for every object */
    for (const person of dataJson) {
        person.date = date.toDateString()      
        dataWithDate.push(person)
    }
    /*Rewriting json file with 'date' property */
    writeData(dataWithDate)
    /*Calling function to filter objects with status = active */
    const filteredArr = filterData(dataWithDate)
    if(property && filteredArr.length !== 0) {
     const sortedArr = sortData(filteredArr, property)
     return sortedArr
    }
    
    if(filteredArr.length === 0) return 0

    return filteredArr
  } catch(error) {
    console.log(error);
  }
}

/* function to filter data of the array of people */
function filterData (dataArr : IPerson []) {
  /* filtering just status active and maping just name, favoriteFood and date properties */
  let filteredData =  dataArr.filter(
                        (data) => data.status === Status.Active)
                        .map(data => {
                          return {
                            name: data.name,
                            favoriteFood: data.favoriteFood,
                            date: data.date
                          }
                        })

  return filteredData
}

function sortData (filteredArr : any [], propObj?: any) {
  const property : any = propObj
  const sortedData = filteredArr.sort( 
    (data1, data2) => 
      (data1[property] > data2[property]) ? 1 : (data1[property] < data2[property])? -1 : 0
  )
  return sortedData
}
