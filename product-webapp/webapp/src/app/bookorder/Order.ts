export class Order
{
    TrackId:String
    UserId:String
    VendorId:String
    fromAddress:{
        addressline1:String
        city:String
        state:String
        country:String
        zipcode:number
    }
    toAddress:{
        addressline1:String
        city:String
        state:String
        country:String
        zipcode:number
    }
}