import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


@Schema({collection: 'ProductPrices'})
export class ProductPrices {
  @Prop({type: ObjectId, ref: 'PriceList', default: null})
  priceLists: ObjectID;

  @Prop({type: ObjectId, ref: 'Product', default: null})
  product: ObjectID;

  @Prop([{
    _id: false,
    count: {type: Number, default: 0},
    price: {type: Number, default: 0}
  }])
  prices: {
    _id: false,
    count: number,
    price: number
  }[];

}

export const productPricesSchema = SchemaFactory.createForClass(ProductPrices);
