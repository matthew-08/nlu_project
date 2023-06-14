import { pgClient } from '..'

const insertFlavorService = async (
    flavor: string,
    categoryId: string | number
) => {
    return await pgClient.query(
        `
        INSERT INTO flavor(name, flavor_category)
        VALUES($1, $2)
        `,
        [flavor, categoryId]
    )
}

export { insertFlavorService }
