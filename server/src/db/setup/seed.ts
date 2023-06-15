import { readFile } from 'fs/promises'
import {
    getCategoryIdService,
    insertCategoryService,
} from '../../service/category.service'
import { insertFlavorService } from '../../service/flavor.service'
import { formatCsv } from '../utils/formatCsv'
const seedDb = async () => {
    const catAndFlavorTuple = await readFile('./src/db/flavors.csv').then(
        (r) => {
            return formatCsv(r.toString()) // [category, flavor]
        }
    )
    const categories: {
        [key: string]: number
    } = {} // Map to avoid duplicate insertions

    // Seed categories
    await Promise.all(
        catAndFlavorTuple.map(async ([category]) => {
            if (!categories[category]) {
                categories[category] = 1
                console.log(`category - inserting ${category}`)
                return insertCategoryService(category)
            }
        })
    )
    // Seed flavors
    await Promise.all(
        catAndFlavorTuple.map(async ([category, flavor]) => {
            if (!category) {
                return
            }
            const catId = await getCategoryIdService(category)
            console.log(`flavor - inserting ${flavor}`)
            return await insertFlavorService(flavor, catId)
        })
    )
    console.log('Database seed complete')
}

seedDb()
