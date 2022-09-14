import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'Products'})
export class Product {
  @Prop({type: Boolean, default: false})
  isBundle: boolean;

  @Prop({type: Boolean, default: false})
  isVariant: boolean;

  @Prop({type: String, default: null})
  groupId: string;

  @Prop({type: ObjectId, ref: 'jobs', default: null})
  job: ObjectID;

  @Prop({type: Boolean, default: true})
  canBeSold: boolean;

  @Prop({type: Boolean, default: true})
  canBeExpensed: boolean;

  @Prop({type: Boolean, default: true})
  eventSubscription: boolean;

  @Prop({type: Boolean, default: true})
  canBePurchased: boolean;

  @Prop({type: ObjectId, ref: 'ProductImages', default: null})
  sourceDocument: ObjectID;

  @Prop({
    type: ObjectId,
    ref: 'Images',
    default: null
  })
  imageSrc: ObjectID;

  @Prop({type: String, default: ''})
  name: string;

  @Prop({
    type: {
      productType: {type: ObjectId, ref: 'productTypes', default: null},
      isActive: {type: Boolean, default: true},
      barcode: {type: String, default: ''},
      description: {type: String, default: ''},
      brand: {type: ObjectId, ref: 'Brand', default: null},
      categories: [{type: ObjectId, ref: 'ProductCategory'}],
      SKU: {type: String, default: null},
      UPC: {type: String, default: null},
      ISBN: {type: String, default: null},
      EAN: {type: String, default: null}
    }
  })
  info: {
    productType: ObjectID,
    isActive: boolean,
    barcode: string,
    description: string,
    brand: ObjectID,
    categories: ObjectID[],
    SKU: string,
    UPC: string,
    ISBN: string,
    EAN: string
  };

  @Prop({
    type: {
      weight: {type: Number, default: 0},

      size: {
        length: {type: Number, default: 0},
        width: {type: Number, default: 0},
        height: {type: Number, default: 0},
        dimension: {type: String, default: 'cm'}
      },

      warehouseMsg: {type: String, default: ''},
      minStockLevel: {type: Number, default: 0}
    }
  })
  inventory: {
    weight: number,
    size: {
      length: number,
      width: number,
      height: number,
      dimension: string
    },
    warehouseMsg: string,
    minStockLevel: number
  };

  @Prop([{type: ObjectId, ref: 'ProductOptionsValues', default: null}])
  variants: ObjectID[];

  @Prop([{
    _id: {type: ObjectId},
    quantity: {type: Number, default: 0}
  }])
  bundles: {
    _id: ObjectID,
    quantity: number
  }[];

  @Prop({type: ObjectId, ref: 'workflows', default: null})
  workflow: ObjectID;

  @Prop({type: String, enum: ['owner', 'group', 'everyOne'], default: 'everyOne'})
  whoCanRW: string;

  @Prop({
    type: {
      owner: {type: ObjectId, ref: 'Users', default: null},
      users: [{type: ObjectId, ref: 'Users', default: null}],
      group: [{type: ObjectId, ref: 'Department', default: null}]
    }
  })
  groups: {
    owner: ObjectID,
    users: ObjectID[],
    group: ObjectID[]
  };

  @Prop({type: Date, default: Date.now})
  creationDate: Date;

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'Users', default: null}
    }
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'Users', default: null}
    }
  })
  editedBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({type: String, default: ''})
  externalId: string;

  @Prop({type: Array, default: []})
  attachments: [];

  @Prop()
  ID: number;

}

export const productSchema = SchemaFactory.createForClass(Product);







