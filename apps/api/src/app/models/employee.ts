import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;


@Schema({collection: 'Employees'})
export class Employee {
  @Prop({type: Boolean, default: false})
  isEmployee: boolean;

  @Prop({
    type: String,
    default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAAEaElEQVRYw82X6XLbNhCA+f4PVomk5MRyHDtp63oEgDcl3vfRBQhQIEVKSvsnO+OxRBEfFnthV+n/pyi/NaCryzzL8rJu/wOgzQPXJBgjhDExnXPW/Aqgy30DI0yIwYQQ4Bhe2j0I6BIbI1jL9meC2TdkRu0jgMxCGN5H2HT8IIzjKPAdE9NngEjuAhqfv3rOpe3aIrDAFoB1qtuA3ADlMXKuz9vlLqZokt4CxPAOQXa2bPDCRVSJYB0QIDA4ibp+TVKDbuCvAeh6YpX9DWkcUGJCkAARXW9UfXeL0PmUcF4CZBA4cALv5nqQM+yD4mtATQMOGMi9RzghiKriCuBiAzsB1e8uwUUGtroZIAEsqfqHCI2JjdGZHNDSZzHYb0boQK4JOTVXNQFEoJXDPskEvrYTrJHgIwOdZEBrggXzfkbo+sY7Hp0Fx9bUYbUEAAtgV/waHAcCnOew3arbLy5lVXGSXIrKGQkrKKMLcnHsPjEGAla1PYi+/YCV37e7DRp1qUDjwREK1wjbo56hezRoPLxt9lzUg+m96Hvtz3BMcU9syQAxKBSJ/c2Nqv0Em5C/97q+BdGoEuoORN98CkAqzsAAPh690vdv2tOOEcx/dodP0zq+qjpoQQF7/Vno2UA0OgLQQbUZI6t/1+BlRgAlyywvqtNXja0HFQ7jGVwoUA0HUBNcMvRdpW8PpzDPYRAERfmNE/TDuE8Ajis4oJAiUwB2+g+am3YEEmT5kz4HgOdRygHUIPEMsFf/YvXJYoSKbPczQI4HwysSbKKBdk4dLAhJsptrUHK1lSERUDYD6E9pGLsjoXzRZgAIJVaYBCCfA57zMBoJYfV9CXDigHhRgww2Hgngh4UjnCUbJAs2CEdCkl25kbou5ABh0KkXPupA6IB8fOUF4TpFOs5Eg50eFSOBfOz0GYCWoJwDoJzwcjQBfM2rMAjD0CEsL/Qp4ISG/FHkuJ4A9toXv66KomosMMNAuAA6GxOWPwqP64sb3kTm7HX1Fbsued9BXjACZKNIphLz/FF4WIps6vqff+jaIFAONiBbTf1hDITti5RLg+cYoDOxqJFwxb0dXmT5Bn/Pn8wOh9dQnMASK4aaSGuk+G24DObCbm5XzkXs9RdASTuytUZO6Czdm2BCA2cSgNbIWedxk0AV4FVYEYFJpLK4SuA3DrsceQEQl6svXy33CKfxIrwAanqZBA8R4AAQWeUMwJ6CZ7t7BIh6utfos0uLwxqP7BECMaTUuQCoawhO+9sSUWtjs1kA9I1Fm8DoNiCl64nUCsp9Ym1SgncjoLoz7YTl9dNOtbGRYSAjWbMDNPKw3py0otNeufVYN2wvzha5g6iGzlTDebsfEdbtW9EsLOvYZs06Dmbsq4GjcoeBgThBWtRN2zZ1mYUuGZ7axfz9hZEns+mMQ+ckzIYm/gn+WQvWWRq6uoxuSNi4RWWAYGfRuCtjXx25Bh25MGaTFzaccCVX1wfPtkiCk+e6nh/ExXps/N6z80PyL8wPTYgPwzDiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDExLTAxLTE5VDAzOjU5OjAwKzAxOjAwaFry6QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMC0xMi0yMVQxNDozMDo0NCswMTowMGxOe/8AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC'
  })
  imageSrc: string;

  @Prop({type: String, default: ''})
  subject: string;

  @Prop({
    type: {
      first: {type: String, default: ''},
      last: {type: String, default: ''}
    }
  })
  name: {
    first: string,
    last: string
  };

  @Prop({type: Array, default: []})
  tags: [];

  @Prop({
    type: {
      street: {type: String, default: ''},
      city: {type: String, default: ''},
      state: {type: String, default: ''},
      zip: {type: String, default: ''},
      country: {type: String, default: ''}
    }
  })
  workAddress: {
    street: string,
    city: string,
    state: string,
    zip: string,
    country: string
  };

  @Prop({type: String, default: ''})
  workEmail: string;

  @Prop({type: String, default: ''})
  personalEmail: string;

  @Prop({
    type: {
      mobile: {type: String, default: ''},
      phone: {type: String, default: ''}
    }
  })
  workPhones: {
    mobile: string,
    phone: string
  };

  @Prop({type: String, default: ''})
  skype: string;

  @Prop({type: String, default: ''})
  officeLocation: string;

  @Prop({type: ObjectId, ref: 'Users', default: null})
  relatedUser: ObjectID;

  @Prop({type: String, default: 'Public'})
  visibility: string;

  @Prop({type: ObjectId, ref: 'Department', default: null})
  department: ObjectID;

  @Prop({type: ObjectId, ref: 'JobPosition', default: null})
  jobPosition: ObjectID;

  @Prop({type: ObjectId, ref: 'weeklyScheduler', default: null})
  weeklyScheduler: ObjectID;

  @Prop({type: ObjectId, ref: 'payrollStructureTypes', default: null})
  payrollStructureType: ObjectID;

  @Prop({type: ObjectId, ref: 'scheduledPay', default: null})
  scheduledPay: ObjectID;

  @Prop({type: ObjectId, ref: 'Employees', default: null})
  manager: ObjectID;

  @Prop({type: ObjectId, ref: 'Employees', default: null})
  coach: ObjectID;

  @Prop({type: ObjectId, default: null})
  nationality: ObjectID;

  @Prop()
  identNo: string;

  @Prop()
  passportNo: string;

  @Prop({type: String, default: ''})
  bankAccountNo: string;

  @Prop({type: String, default: ''})
  otherId: string;

  @Prop({
    type: {
      street: {type: String, default: ''},
      city: {type: String, default: ''},
      state: {type: String, default: ''},
      zip: {type: String, default: ''},
      country: {type: String, default: ''}
    }
  })
  homeAddress: {
    street: string,
    city: string,
    state: string,
    zip: string,
    country: string
  };

  @Prop()
  dateBirth: Date;

  @Prop({type: Number, default: 0})
  age: number;

  @Prop()
  daysForBirth: number;

  @Prop()
  nextAction: Date;

  @Prop({type: String, default: ''})
  source: string;

  @Prop({type: String, default: ''})
  referredBy: string;

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

  @Prop({type: String, default: ''})
  otherInfo: string;

  @Prop()
  expectedSalary: number;

  @Prop()
  proposedSalary: number;

  @Prop({type: String, default: '#4d5a75'})
  color: string;

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

  @Prop({type: Array, default: []})
  attachments: [];

  @Prop({type: Array, default: []})
  notes: [];

  @Prop({
    type: {
      reason: {type: String, default: ''},
      date: {type: Date, default: Date.now}
    }
  })
  contractEnd: {
    reason: string,
    date: Date
  };

  @Prop({type: String, enum: ['married', 'unmarried'], default: 'unmarried'})
  marital: string;

  @Prop({type: String, enum: ['Employees', 'FOP', 'Un Employees'], default: 'Un Employees'})
  employmentType: string;

  @Prop({type: String, enum: ['male', 'female'], default: 'male'})
  gender: string;

  @Prop({type: String, default: ''})
  jobType: string;

  @Prop({type: Number, default: 0})
  sequence: number;

  @Prop()
  isLead: number;

  @Prop()
  ID: number;

  @Prop({
    type: {
      FB: {type: String, default: ''},
      LI: {type: String, default: ''},
      GP: {type: String, default: ''}
    }
  })
  social: {
    FB: string,
    LI: string,
    GP: string
  };

  @Prop([Date])
  hire: Date[];

  @Prop([Date])
  fire: Date[];

  @Prop({type: Array, default: []})
  transfer: [];

  @Prop({type: Number, default: null})
  lastFire: number;

  @Prop({type: String, default: null})
  externalId: string;

  @Prop()
  userName: string;

}

export const employeeSchema = SchemaFactory.createForClass(Employee);


employeeSchema.virtual('fullName').get(function () {
  return this.name.first + ' ' + this.name.last;
});

employeeSchema.set('toJSON', {virtuals: true});
