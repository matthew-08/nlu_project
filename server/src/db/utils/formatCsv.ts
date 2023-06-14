export const formatCsv = (csv: string) => {
    return csv
        .toString()
        .split('\n') // Split lines
        .map((s) => s.trim().split('"')) // remove whitespace, split on "
        .map((row) =>
            row.map((item) => {
                if (item.includes('Cr&egrave;me')) {
                    return item // remove escape character / reformat "cream"
                        .replace('Cr&egrave;me', 'Cream')
                        .replace('""', '')
                }
                return item
            })
        )
        .map((row) =>
            row.filter((item) => {
                if (
                    item === '' ||
                    item === ',' || // Remove delimiter
                    Number(item) || // Remove id column
                    item === '"' // Row extraneous "
                ) {
                    return false
                }
                return true
            })
        )
}
