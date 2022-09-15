import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import { Job } from './job';
import { Image } from './image';
import { ProductType } from './product-type';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Brand } from './brand';
import { ProductCategory } from './product-category';
import { ProductOptionValue } from './product-option-value';
import { Workflow } from './workflow';
import { User } from './user';
import { Department } from './department';

@Schema({collection: 'Products'})
export class Product {
  @Prop({type: Boolean, default: false})
  isBundle: boolean;

  @Prop({type: Boolean, default: false})
  isVariant: boolean;

  @Prop({type: String, default: null})
  groupId: string;

  @Prop({type: ObjectId, ref: 'Job', default: null})
  job: string | ObjectID | Job;

  @Prop({type: Boolean, default: true})
  canBeSold: boolean;

  @Prop({type: Boolean, default: true})
  canBeExpensed: boolean;

  @Prop({type: Boolean, default: true})
  eventSubscription: boolean;

  @Prop({type: Boolean, default: true})
  canBePurchased: boolean;

  @Prop({type: ObjectId, ref: 'ProductImage', default: null})
  sourceDocument: string | ObjectID;

  @Prop({
    type: ObjectId,
    ref: 'Image',
    default: null
  })
  imageSrc: string | ObjectID | Image;

  @Prop({type: String, default: ''})
  name: string;

  @Prop({
    type: {
      productType: {type: ObjectId, ref: 'ProductType', default: null},
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
    productType: string | ObjectID | ProductType,
    isActive: boolean,
    barcode: string,
    description: string,
    brand: string | ObjectID | Brand,
    categories: (string | ObjectID | ProductCategory)[],
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

  @Prop([{type: ObjectId, ref: 'ProductOptionValue', default: null}])
  variants: (string | ObjectID | ProductOptionValue)[];

  @Prop([{
    _id: {type: ObjectId},
    quantity: {type: Number, default: 0}
  }])
  bundles: {
    _id: ObjectID,
    quantity: number
  }[];

  @Prop({type: ObjectId, ref: 'Workflow', default: null})
  workflow: string | ObjectID | Workflow;

  @Prop({type: String, enum: ['owner', 'group', 'everyOne'], default: 'everyOne'})
  whoCanRW: string;

  @Prop({
    type: {
      owner: {type: ObjectId, ref: 'User', default: null},
      users: [{type: ObjectId, ref: 'User', default: null}],
      group: [{type: ObjectId, ref: 'Department', default: null}]
    }
  })
  groups: {
    owner: string | ObjectID | User,
    users: (string | ObjectID | User)[],
    group: (string | ObjectID | Department)[]
  };

  @Prop({type: Date, default: Date.now})
  creationDate: Date;

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  createdBy: {
    user: string | ObjectID | User,
    date: Date
  };

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  editedBy: {
    user: string | ObjectID | User,
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







