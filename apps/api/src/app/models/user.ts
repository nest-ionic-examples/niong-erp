import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

@Schema({collection: 'Users'})
export class User {
  /** `base64` representation of avatar */
  @Prop({
    type: String,
    default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAAEaElEQVRYw82X6XLbNhCA+f4PVomk5MRyHDtp63oEgDcl3vfRBQhQIEVKSvsnO+OxRBEfFnthV+n/pyi/NaCryzzL8rJu/wOgzQPXJBgjhDExnXPW/Aqgy30DI0yIwYQQ4Bhe2j0I6BIbI1jL9meC2TdkRu0jgMxCGN5H2HT8IIzjKPAdE9NngEjuAhqfv3rOpe3aIrDAFoB1qtuA3ADlMXKuz9vlLqZokt4CxPAOQXa2bPDCRVSJYB0QIDA4ibp+TVKDbuCvAeh6YpX9DWkcUGJCkAARXW9UfXeL0PmUcF4CZBA4cALv5nqQM+yD4mtATQMOGMi9RzghiKriCuBiAzsB1e8uwUUGtroZIAEsqfqHCI2JjdGZHNDSZzHYb0boQK4JOTVXNQFEoJXDPskEvrYTrJHgIwOdZEBrggXzfkbo+sY7Hp0Fx9bUYbUEAAtgV/waHAcCnOew3arbLy5lVXGSXIrKGQkrKKMLcnHsPjEGAla1PYi+/YCV37e7DRp1qUDjwREK1wjbo56hezRoPLxt9lzUg+m96Hvtz3BMcU9syQAxKBSJ/c2Nqv0Em5C/97q+BdGoEuoORN98CkAqzsAAPh690vdv2tOOEcx/dodP0zq+qjpoQQF7/Vno2UA0OgLQQbUZI6t/1+BlRgAlyywvqtNXja0HFQ7jGVwoUA0HUBNcMvRdpW8PpzDPYRAERfmNE/TDuE8Ajis4oJAiUwB2+g+am3YEEmT5kz4HgOdRygHUIPEMsFf/YvXJYoSKbPczQI4HwysSbKKBdk4dLAhJsptrUHK1lSERUDYD6E9pGLsjoXzRZgAIJVaYBCCfA57zMBoJYfV9CXDigHhRgww2Hgngh4UjnCUbJAs2CEdCkl25kbou5ABh0KkXPupA6IB8fOUF4TpFOs5Eg50eFSOBfOz0GYCWoJwDoJzwcjQBfM2rMAjD0CEsL/Qp4ISG/FHkuJ4A9toXv66KomosMMNAuAA6GxOWPwqP64sb3kTm7HX1Fbsued9BXjACZKNIphLz/FF4WIps6vqff+jaIFAONiBbTf1hDITti5RLg+cYoDOxqJFwxb0dXmT5Bn/Pn8wOh9dQnMASK4aaSGuk+G24DObCbm5XzkXs9RdASTuytUZO6Czdm2BCA2cSgNbIWedxk0AV4FVYEYFJpLK4SuA3DrsceQEQl6svXy33CKfxIrwAanqZBA8R4AAQWeUMwJ6CZ7t7BIh6utfos0uLwxqP7BECMaTUuQCoawhO+9sSUWtjs1kA9I1Fm8DoNiCl64nUCsp9Ym1SgncjoLoz7YTl9dNOtbGRYSAjWbMDNPKw3py0otNeufVYN2wvzha5g6iGzlTDebsfEdbtW9EsLOvYZs06Dmbsq4GjcoeBgThBWtRN2zZ1mYUuGZ7axfz9hZEns+mMQ+ckzIYm/gn+WQvWWRq6uoxuSNi4RWWAYGfRuCtjXx25Bh25MGaTFzaccCVX1wfPtkiCk+e6nh/ExXps/N6z80PyL8wPTYgPwzDiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDExLTAxLTE5VDAzOjU5OjAwKzAxOjAwaFry6QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMC0xMi0yMVQxNDozMDo0NCswMTowMGxOe/8AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC'
  })
  imageSrc: string;

  @Prop({type: String, default: '', required: true, unique: true})
  login: string;

  /** Personal email */
  @Prop({type: String, default: '', unique: true})
  email: string;

  @Prop({type: String, default: ''})
  pass: string;

  @Prop({type: String, default: ''})
  mobilePhone: string;

  @Prop({type: String, default: ''})
  website: string;

  @Prop({type: String, default: ''})
  company: string;

  @Prop({
    first: {type: String, default: ''},
    last: {type: String, default: ''}
  })
  contactName: {
    first: string,
    last: string
  };

  @Prop({
    userId: {type: String, default: ''}
  })
  facebook: {
    userId: string
  };

  @Prop({
    userId: {type: String, default: ''}
  })
  google: {
    userId: string
  };

  @Prop({
    userId: {type: String, default: ''},
    country: {type: String, default: ''},
    profileUrl: {type: String, default: ''}
  })
  linkedin: {
    userId: string,
    country: string,
    profileUrl: string
  };

  @Prop({
    refresh_token: {type: String, default: ''},
    access_token: {type: String, default: ''},
    verify_token: {type: String, default: ''}
  })
  credentials: {
    refresh_token: string,
    access_token: string,
    verify_token: string
  };

  @Prop({type: Number, ref: 'Profile', required: true})
  profile: number;

  @Prop({type: Date})
  lastAccess: Date;

  /** Setting for `kanban` viewType */
  @Prop({
    opportunities: {
      countPerPage: {type: Number, default: 10},
      foldWorkflows: [{type: String, default: ''}]
    },

    applications: {
      countPerPage: {type: Number, default: 10},
      foldWorkflows: [{type: String, default: ''}]
    },

    tasks: {
      countPerPage: {type: Number, default: 10},
      foldWorkflows: [{type: String, default: ''}]
    }
  })
  kanbanSettings: {
    opportunities: {
      countPerPage: number,
      foldWorkflows: string[]
    },
    applications: {
      countPerPage: number,
      foldWorkflows: string[]
    },
    tasks: {
      countPerPage: number,
      foldWorkflows: string[]
    }
  };

  /** Saved filters for current user */
  @Prop([
    {
      _id: {type: ObjectId, ref: 'savedFilters', default: null},
      byDefault: {type: Boolean, default: false},
      contentType: {type: String, default: null}
    }
  ])
  savedFilters: {
    _id: ObjectID,
    byDefault: boolean,
    contentType: string
  }[];

  @Prop({
    reports: [{type: ObjectId, ref: 'CustomReport', default: null}],
    dashboards: [{type: ObjectId, ref: 'CustomDashboard', default: null}]
  })
  favorite: {
    reports: ObjectID[],
    dashboards: ObjectID[]
  };

  @Prop()
  ID: number;

  /** Related employee for current user */
  @Prop({type: ObjectId, ref: 'Employees', default: null})
  relatedEmployee: ObjectID;

  @Prop({
    fileName: {type: String, default: ''},
    filePath: {type: String, default: ''},
    timeStamp: {type: Number},
    stage: {type: Number, default: 1},
    map: {type: JSON},
    unMap: {type: JSON},
    type: {type: String, default: ''},
    comparingField: {type: String, default: ''},
    delimiter: {type: String, default: ','},
    skipped: {type: Array},
    conflictedItems: {type: Array},
    importedCount: {type: Number, default: 0}
  })
  imports: {
    fileName: string,
    filePath: string,
    timeStamp: number,
    stage: number,
    map: {type: JSON},
    unMap: {type: JSON},
    type: string,
    comparingField: string,
    delimiter: string,
    skipped: [],
    conflictedItems: [],
    importedCount: number
  };
}

export const userSchema = SchemaFactory.createForClass(User);
