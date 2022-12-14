import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import { Currency } from './currency';
import { User } from './user';
import { Industry } from './industry';
import { Language } from './language';
import { ChartOfAccount } from './chart-of-account';
import { PaymentMethod } from './payment-method';
import { PaymentTerm } from './payment-term';

@Schema({collection: 'orgSettings'})
export class OrganizationSetting {
  @Prop()
  name: string;

  @Prop({
    type: {
      street: {type: String, default: ''},
      city: {type: String, default: ''},
      state: {type: String, default: ''},
      zip: {type: String, default: ''},
      fax: {type: String, default: ''},
      country: {type: String, default: ''}
    }
  })
  address: {
    street: string,
    city: string,
    state: string,
    zip: string,
    fax: string,
    country: string
  };

  @Prop({
    type: String,
    default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAAEaElEQVRYw82X6XLbNhCA+f4PVomk5MRyHDtp63oEgDcl3vfRBQhQIEVKSvsnO+OxRBEfFnthV+n/pyi/NaCryzzL8rJu/wOgzQPXJBgjhDExnXPW/Aqgy30DI0yIwYQQ4Bhe2j0I6BIbI1jL9meC2TdkRu0jgMxCGN5H2HT8IIzjKPAdE9NngEjuAhqfv3rOpe3aIrDAFoB1qtuA3ADlMXKuz9vlLqZokt4CxPAOQXa2bPDCRVSJYB0QIDA4ibp+TVKDbuCvAeh6YpX9DWkcUGJCkAARXW9UfXeL0PmUcF4CZBA4cALv5nqQM+yD4mtATQMOGMi9RzghiKriCuBiAzsB1e8uwUUGtroZIAEsqfqHCI2JjdGZHNDSZzHYb0boQK4JOTVXNQFEoJXDPskEvrYTrJHgIwOdZEBrggXzfkbo+sY7Hp0Fx9bUYbUEAAtgV/waHAcCnOew3arbLy5lVXGSXIrKGQkrKKMLcnHsPjEGAla1PYi+/YCV37e7DRp1qUDjwREK1wjbo56hezRoPLxt9lzUg+m96Hvtz3BMcU9syQAxKBSJ/c2Nqv0Em5C/97q+BdGoEuoORN98CkAqzsAAPh690vdv2tOOEcx/dodP0zq+qjpoQQF7/Vno2UA0OgLQQbUZI6t/1+BlRgAlyywvqtNXja0HFQ7jGVwoUA0HUBNcMvRdpW8PpzDPYRAERfmNE/TDuE8Ajis4oJAiUwB2+g+am3YEEmT5kz4HgOdRygHUIPEMsFf/YvXJYoSKbPczQI4HwysSbKKBdk4dLAhJsptrUHK1lSERUDYD6E9pGLsjoXzRZgAIJVaYBCCfA57zMBoJYfV9CXDigHhRgww2Hgngh4UjnCUbJAs2CEdCkl25kbou5ABh0KkXPupA6IB8fOUF4TpFOs5Eg50eFSOBfOz0GYCWoJwDoJzwcjQBfM2rMAjD0CEsL/Qp4ISG/FHkuJ4A9toXv66KomosMMNAuAA6GxOWPwqP64sb3kTm7HX1Fbsued9BXjACZKNIphLz/FF4WIps6vqff+jaIFAONiBbTf1hDITti5RLg+cYoDOxqJFwxb0dXmT5Bn/Pn8wOh9dQnMASK4aaSGuk+G24DObCbm5XzkXs9RdASTuytUZO6Czdm2BCA2cSgNbIWedxk0AV4FVYEYFJpLK4SuA3DrsceQEQl6svXy33CKfxIrwAanqZBA8R4AAQWeUMwJ6CZ7t7BIh6utfos0uLwxqP7BECMaTUuQCoawhO+9sSUWtjs1kA9I1Fm8DoNiCl64nUCsp9Ym1SgncjoLoz7YTl9dNOtbGRYSAjWbMDNPKw3py0otNeufVYN2wvzha5g6iGzlTDebsfEdbtW9EsLOvYZs06Dmbsq4GjcoeBgThBWtRN2zZ1mYUuGZ7axfz9hZEns+mMQ+ckzIYm/gn+WQvWWRq6uoxuSNi4RWWAYGfRuCtjXx25Bh25MGaTFzaccCVX1wfPtkiCk+e6nh/ExXps/N6z80PyL8wPTYgPwzDiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDExLTAxLTE5VDAzOjU5OjAwKzAxOjAwaFry6QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMC0xMi0yMVQxNDozMDo0NCswMTowMGxOe/8AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC'
  })
  imageSrc: string;

  @Prop({type: String, default: ''})
  phone: string;

  @Prop({type: String, default: ''})
  website: string;

  @Prop({type: String, ref: 'Currency', default: null})
  currency: string | Currency;

  @Prop({type: ObjectId, ref: 'Industry', default: null})
  industry: string | ObjectID | Industry;

  @Prop({type: ObjectId, ref: 'User', default: null})
  contact: string | ObjectID | User;

  @Prop()
  startDate: Date;

  @Prop({type: Boolean, default: true})
  defaultEmail: boolean;

  @Prop({type: ObjectId, ref: 'Language', default: null})
  language: string | ObjectID | Language;

  @Prop({type: ObjectId, ref: 'User', default: null})
  user: string | ObjectID | User;

  @Prop({type: String, default: ''})
  contactName: string;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  salesTax: string | ObjectID | ChartOfAccount;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  purchaseTax: string | ObjectID | ChartOfAccount;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  payableTax: string | ObjectID | ChartOfAccount;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  carriedTax: string | ObjectID | ChartOfAccount;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  shipping: string | ObjectID | ChartOfAccount;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  discount: string | ObjectID | ChartOfAccount;

  @Prop({type: ObjectId, ref: 'ChartOfAccount', default: null})
  workInProgress: string | ObjectID | ChartOfAccount;

  @Prop({type: ObjectId, ref: 'PaymentMethod', default: null})
  bankAccount: string | ObjectID | PaymentMethod;

  @Prop({type: ObjectId, ref: 'PaymentTerm', default: null})
  paymentTerms: string | ObjectID | PaymentTerm;

}

export const organizationSettingSchema = SchemaFactory.createForClass(OrganizationSetting);
