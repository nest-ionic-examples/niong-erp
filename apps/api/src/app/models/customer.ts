import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'Customers'})
export class Customer {
  @Prop({type: String, default: ''})
  type: string;

  @Prop({type: Boolean, default: false})
  isOwn: boolean;

  @Prop({type: Boolean, default: false})
  isHidden: boolean;

  @Prop({
    type: {
      first: {type: String, default: 'demo'},
      last: {type: String, default: ''}
    }
  })
  name: {
    first: string,
    last: string
  };

  @Prop()
  dateBirth: Date;

  @Prop({
    type: String,
    default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAAEaElEQVRYw82X6XLbNhCA+f4PVomk5MRyHDtp63oEgDcl3vfRBQhQIEVKSvsnO+OxRBEfFnthV+n/pyi/NaCryzzL8rJu/wOgzQPXJBgjhDExnXPW/Aqgy30DI0yIwYQQ4Bhe2j0I6BIbI1jL9meC2TdkRu0jgMxCGN5H2HT8IIzjKPAdE9NngEjuAhqfv3rOpe3aIrDAFoB1qtuA3ADlMXKuz9vlLqZokt4CxPAOQXa2bPDCRVSJYB0QIDA4ibp+TVKDbuCvAeh6YpX9DWkcUGJCkAARXW9UfXeL0PmUcF4CZBA4cALv5nqQM+yD4mtATQMOGMi9RzghiKriCuBiAzsB1e8uwUUGtroZIAEsqfqHCI2JjdGZHNDSZzHYb0boQK4JOTVXNQFEoJXDPskEvrYTrJHgIwOdZEBrggXzfkbo+sY7Hp0Fx9bUYbUEAAtgV/waHAcCnOew3arbLy5lVXGSXIrKGQkrKKMLcnHsPjEGAla1PYi+/YCV37e7DRp1qUDjwREK1wjbo56hezRoPLxt9lzUg+m96Hvtz3BMcU9syQAxKBSJ/c2Nqv0Em5C/97q+BdGoEuoORN98CkAqzsAAPh690vdv2tOOEcx/dodP0zq+qjpoQQF7/Vno2UA0OgLQQbUZI6t/1+BlRgAlyywvqtNXja0HFQ7jGVwoUA0HUBNcMvRdpW8PpzDPYRAERfmNE/TDuE8Ajis4oJAiUwB2+g+am3YEEmT5kz4HgOdRygHUIPEMsFf/YvXJYoSKbPczQI4HwysSbKKBdk4dLAhJsptrUHK1lSERUDYD6E9pGLsjoXzRZgAIJVaYBCCfA57zMBoJYfV9CXDigHhRgww2Hgngh4UjnCUbJAs2CEdCkl25kbou5ABh0KkXPupA6IB8fOUF4TpFOs5Eg50eFSOBfOz0GYCWoJwDoJzwcjQBfM2rMAjD0CEsL/Qp4ISG/FHkuJ4A9toXv66KomosMMNAuAA6GxOWPwqP64sb3kTm7HX1Fbsued9BXjACZKNIphLz/FF4WIps6vqff+jaIFAONiBbTf1hDITti5RLg+cYoDOxqJFwxb0dXmT5Bn/Pn8wOh9dQnMASK4aaSGuk+G24DObCbm5XzkXs9RdASTuytUZO6Czdm2BCA2cSgNbIWedxk0AV4FVYEYFJpLK4SuA3DrsceQEQl6svXy33CKfxIrwAanqZBA8R4AAQWeUMwJ6CZ7t7BIh6utfos0uLwxqP7BECMaTUuQCoawhO+9sSUWtjs1kA9I1Fm8DoNiCl64nUCsp9Ym1SgncjoLoz7YTl9dNOtbGRYSAjWbMDNPKw3py0otNeufVYN2wvzha5g6iGzlTDebsfEdbtW9EsLOvYZs06Dmbsq4GjcoeBgThBWtRN2zZ1mYUuGZ7axfz9hZEns+mMQ+ckzIYm/gn+WQvWWRq6uoxuSNi4RWWAYGfRuCtjXx25Bh25MGaTFzaccCVX1wfPtkiCk+e6nh/ExXps/N6z80PyL8wPTYgPwzDiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDExLTAxLTE5VDAzOjU5OjAwKzAxOjAwaFry6QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMC0xMi0yMVQxNDozMDo0NCswMTowMGxOe/8AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC'
  })
  imageSrc: string;

  @Prop({type: String, default: ''})
  email: string;

  @Prop({type: ObjectId, ref: 'Customer', default: null})
  company: ObjectID;

  @Prop({type: ObjectId, ref: 'Department', default: null})
  department: ObjectID;

  @Prop({type: String, default: 'UTC'})
  timezone: string;

  @Prop({
    type: {
      street: {type: String, default: ''},
      city: {type: String, default: ''},
      state: {type: String, default: ''},
      zip: {type: String, default: ''},
      country: {type: String, default: ''}
    }
  })
  address: {
    street: string,
    city: string,
    state: string,
    zip: string,
    country: string
  };

  @Prop({
    type: {
      street: {type: String, default: ''},
      city: {type: String, default: ''},
      state: {type: String, default: ''},
      zip: {type: String, default: ''},
      country: {type: String, default: ''},
      name: {type: String, default: ''}
    }
  })
  shippingAddress: {
    street: string,
    city: string,
    state: string,
    zip: string,
    country: string,
    name: string
  };

  @Prop({type: String, default: ''})
  website: string;

  @Prop({type: String, default: ''})
  jobPosition: string;

  @Prop({type: String, default: ''})
  skype: string;

  @Prop({
    type: {
      phone: {type: String, default: ''},
      mobile: {type: String, default: ''},
      fax: {type: String, default: ''}
    }
  })
  phones: {
    phone: string,
    mobile: string,
    fax: string
  };

  @Prop({type: Array, default: []})
  contacts: [];

  @Prop({type: String, default: ''})
  internalNotes: string;

  @Prop({type: String, default: ''})
  title: string;

  @Prop({
    type: {
      isCustomer: {type: Boolean, default: true},
      isSupplier: {type: Boolean, default: false},
      salesPerson: {type: ObjectId, ref: 'Employee', default: null},
      salesTeam: {type: ObjectId, ref: 'Department', default: null},
      implementedBy: {type: ObjectId, ref: 'Customer', default: null},
      active: {type: Boolean, default: true},
      reference: {type: String, default: ''},
      language: {type: String, default: 'English'},
      receiveMessages: {type: Number, default: 0}
    }
  })
  salesPurchases: {
    isCustomer: boolean,
    isSupplier: boolean,
    salesPerson: ObjectID,
    salesTeam: ObjectID,
    implementedBy: ObjectID,
    active: boolean,
    reference: string,
    language: string,
    receiveMessages: number
  };

  @Prop({type: ObjectId, ref: 'User', default: null})
  relatedUser: ObjectID;

  @Prop({type: String, default: '#4d5a75'})
  color: string;

  @Prop({
    type: {
      FB: {type: String, default: ''},
      LI: {type: String, default: ''}
    }
  })
  social: {
    FB: string,
    LI: string
  };

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
    owner: ObjectID,
    users: ObjectID[],
    group: ObjectID[]
  };

  @Prop([{
    note: String,
    title: String,
    task: {type: ObjectId, ref: 'DealTasks', default: null},
    attachment: {},
    date: {type: Date, default: Date.now},
    user: {
      _id: {type: ObjectId, ref: 'User', default: null},
      login: String
    }
  }])
  notes: {
    note: string,
    title: string,
    task: ObjectID,
    attachment: object,
    date: Date,
    user: {
      _id: ObjectID,
      login: string
    }
  }[];

  @Prop({type: Array, default: []})
  attachments: [];

  @Prop({type: Array, default: []})
  history: [];

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  createdBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({
    type: {
      date: {type: Date, default: Date.now},
      user: {type: ObjectId, ref: 'User', default: null}
    }
  })
  editedBy: {
    user: ObjectID,
    date: Date
  };

  @Prop({
    type: {
      size: String,
      industry: {type: ObjectId, ref: 'Industries', default: null}
    }
  })
  companyInfo: {
    size: string,
    industry: ObjectID
  };

  @Prop()
  ID: number;

  @Prop({type: String, default: ''})
  integrationId: string;

  @Prop({type: ObjectId, ref: 'Integration', default: null})
  channel: ObjectID;

}

export const customerSchema = SchemaFactory.createForClass(Customer);


customerSchema.virtual('fullName').get(function () {
  return this.name.first + ' ' + this.name.last;
});

customerSchema.set('toJSON', {virtuals: true});
