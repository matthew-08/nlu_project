import { Request, Response } from 'express'
import {
    getAllCategoriesService,
    getCategoryFlavorsService,
} from '../service/category.service'
import { GetCategoryFlavorsParams } from '../types/category.types'

const getCategoriesHandler = async (req: Request, res: Response) => {
    const categories = await getAllCategoriesService()
    return res.status(200).send(categories)
}

const getCategoryFlavorsHandler = async (
    req: Request<GetCategoryFlavorsParams>,
    res: Response
) => {
    const { id } = req.params
    const categoryFlavors = await getCategoryFlavorsService(id)
    return res.status(200).send(categoryFlavors)
}

export { getCategoriesHandler, getCategoryFlavorsHandler }
