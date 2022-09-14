import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


@Schema()
export class Success {
  @Prop()
  _id: false;

  @Prop({type: String, default: ''})
  entityId: string;

  @Prop({type: String, default: ''})
  entityDescription: string;

  @Prop({type: String, default: ''})
  message: string;

  @Prop({type: String, enum: ['create', 'update'], default: 'create'})
  type: string;

  @Prop({type: Number, min: 1, max: 3, default: 1})
  status: number;

}

export const successSchema = SchemaFactory.createForClass(Success);


@Schema()
export class Error {
  @Prop()
  _id: false;

  @Prop({type: String, default: ''})
  entityId: string;

  @Prop({type: String, default: ''})
  entityDescription: string;

  @Prop({type: String, default: ''})
  message: string;

  @Prop({type: Boolean, default: false})
  isCritical: boolean;

}

export const errorSchema = SchemaFactory.createForClass(Error);


@Schema({collection: 'syncLogs'})
export class SyncLog {
  @Prop({type: ObjectId, ref: 'integrations', default: null})
  channel: ObjectID;

  @Prop({type: ObjectId, ref: 'Users', default: null})
  user: ObjectID;

  @Prop({type: Date, default: Date.now})
  date: Date;

  @Prop({type: Number, min: 1, max: 3, default: 1})
  status: number;

  @Prop({type: Number, default: 0})
  errorsCount: number;

  @Prop({type: Number, default: 0})
  criticalErrorsCount: number;

  @Prop({
    type: {
      categories: {
        isComplete: {type: Boolean, default: true},
        data: [successSchema],
        errors: [errorSchema],
        succeed: {type: Number, default: 0},
        unlinked: {type: Number, default: 0},
        conflicted: {type: Number, default: 0}
      },

      products: {
        isComplete: {type: Boolean, default: true},
        data: [successSchema],
        errors: [errorSchema],
        succeed: {type: Number, default: 0},
        unlinked: {type: Number, default: 0},
        conflicted: {type: Number, default: 0}
      },

      inventory: {
        isComplete: {type: Boolean, default: true},
        data: [successSchema],
        errors: [errorSchema],
        succeed: {type: Number, default: 0},
        unlinked: {type: Number, default: 0},
        conflicted: {type: Number, default: 0}
      }
    }
  })
  exports: {
    categories: {
      isComplete: boolean,
      data: Success[],
      errors: Error[],
      succeed: number,
      unlinked: number,
      conflicted: number
    },
    products: {
      isComplete: boolean,
      data: Success[],
      errors: Error[],
      succeed: number,
      unlinked: number,
      conflicted: number
    },
    inventory: {
      isComplete: boolean,
      data: Success[],
      errors: Error[],
      succeed: number,
      unlinked: number,
      conflicted: number
    }
  };

  @Prop({
    type: {
      categories: {
        isComplete: {type: Boolean, default: true},
        data: [successSchema],
        errors: [errorSchema],
        succeed: {type: Number, default: 0},
        unlinked: {type: Number, default: 0},
        conflicted: {type: Number, default: 0}
      },

      products: {
        isComplete: {type: Boolean, default: true},
        data: [successSchema],
        errors: [errorSchema],
        succeed: {type: Number, default: 0},
        unlinked: {type: Number, default: 0},
        conflicted: {type: Number, default: 0}
      },

      customers: {
        isComplete: {type: Boolean, default: true},
        data: [successSchema],
        errors: [errorSchema],
        succeed: {type: Number, default: 0},
        unlinked: {type: Number, default: 0},
        conflicted: {type: Number, default: 0}
      },

      orders: {
        isComplete: {type: Boolean, default: true},
        data: [successSchema],
        errors: [errorSchema],
        succeed: {type: Number, default: 0},
        unlinked: {type: Number, default: 0},
        conflicted: {type: Number, default: 0}
      },

      invoice: {
        isComplete: {type: Boolean, default: true},
        data: [successSchema],
        errors: [errorSchema],
        succeed: {type: Number, default: 0},
        unlinked: {type: Number, default: 0},
        conflicted: {type: Number, default: 0}
      }
    }
  })
  imports: {
    categories: {
      isComplete: boolean,
      data: Success[],
      errors: Error[],
      succeed: number,
      unlinked: number,
      conflicted: number
    },
    products: {
      isComplete: boolean,
      data: Success[],
      errors: Error[],
      succeed: number,
      unlinked: number,
      conflicted: number
    },
    customers: {
      isComplete: boolean,
      data: Success[],
      errors: Error[],
      succeed: number,
      unlinked: number,
      conflicted: number
    },
    orders: {
      isComplete: boolean,
      data: Success[],
      errors: Error[],
      succeed: number,
      unlinked: number,
      conflicted: number
    },
    invoice: {
      isComplete: boolean,
      data: Success[],
      errors: Error[],
      succeed: number,
      unlinked: number,
      conflicted: number
    }
  };

}

export const syncLogSchema = SchemaFactory.createForClass(SyncLog);
