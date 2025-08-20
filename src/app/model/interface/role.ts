export interface IRole{
    id: number,
    productName: string,
    totalQuantity: number,
    remainingQuantity: number,
    soldQuantity: number
}

export interface APIResponseModel {
    message: string,
    result: boolean,
    data: any
}