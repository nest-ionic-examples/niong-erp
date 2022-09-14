import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'Opportunities'})
export class Opportunity {
  @Prop({type: Boolean, default: false, index: true})
  isOpportunitie: boolean;

  @Prop({type: String, default: ''})
  name: string;

  @Prop({
    type: {
      value: {type: Number, default: 0},
      progress: {type: Number, default: 0},
      currency: {type: String, default: ''}
    }
  })
  expectedRevenue: {
    value: number,
    progress: number,
    currency: string
  };

  @Prop({type: String, default: ''})
  jobPosition: string;

  @Prop({type: Date, default: Date.now})
  creationDate: Date;

  @Prop({type: String, default: ''})
  tempCompanyField: string;

  @Prop({type: ObjectId, ref: 'Customers', default: null})
  company: ObjectID;

  @Prop({type: ObjectId, ref: 'Customers', default: null})
  customer: ObjectID;

  @Prop([{type: ObjectId, ref: 'tags', default: null}])
  tags: ObjectID[];

  @Prop()
  dateBirth: Date;

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
      first: {type: String, default: ''},
      last: {type: String, default: ''}
    }
  })
  contactName: {
    first: string,
    last: string
  };

  @Prop({type: String, default: ''})
  email: string;

  @Prop({
    type: {
      mobile: {type: String, default: ''},
      phone: {type: String, default: ''},
      fax: {type: String, default: ''}
    }
  })
  phones: {
    mobile: string,
    phone: string,
    fax: string
  };

  @Prop({type: String, default: ''})
  func: string;

  @Prop({type: ObjectId, ref: 'Employees', default: null})
  salesPerson: ObjectID;

  @Prop({type: ObjectId, ref: 'Department', default: null})
  salesTeam: ObjectID;

  @Prop({type: String, default: ''})
  internalNotes: string;

  @Prop({
    type: {
      desc: {type: String, default: ''},
      date: {type: Date, default: Date.now}
    }
  })
  nextAction: {
    desc: string,
    date: Date
  };

  @Prop({type: Date, default: null})
  expectedClosing: Date;

  @Prop({type: String, default: 'Cold'})
  priority: string;

  @Prop({
    type: {
      id: {type: String, default: ''},
      name: {type: String, default: ''}
    }
  })
  categories: {
    id: string,
    name: string
  };

  @Prop({type: String, default: '#4d5a75'})
  color: string;

  @Prop({type: Boolean, default: true})
  active: boolean;

  @Prop({type: Boolean, default: false})
  optout: boolean;

  @Prop({type: String, default: ''})
  reffered: string;

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

  @Prop({type: Number, default: 0})
  sequence: number;

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
  campaign: string;

  @Prop({type: String, default: ''})
  source: string;

  @Prop({type: Boolean, default: false})
  isConverted: boolean;

  @Prop({type: Date, default: Date.now})
  convertedDate: Date;

  @Prop([{
    note: String,
    title: String,
    task: {type: ObjectId, ref: 'DealTasks', default: null},
    attachment: {},
    date: {type: Date, default: Date.now},
    user: {
      _id: {type: ObjectId, ref: 'Users', default: null},
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

  @Prop({type: String, default: 'fixed'})
  projectType: string;

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

  @Prop({type: String, default: ''})
  skype: string;

  @Prop({type: String, default: null})
  externalId: string;

}

export const opportunitySchema = SchemaFactory.createForClass(Opportunity);
