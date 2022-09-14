import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({collection: 'SaasDbs'})
export class Saas {
  @Prop()
  _id: string;

  @Prop({type: Date, default: Date.now})
  registrationDate: Date;

  @Prop()
  ip: string;

  @Prop({type: JSON})
  geo: JSON;

  @Prop({type: String, default: 'localhost'})
  url: string;

  @Prop({type: String, default: ''})
  DBname: string;

  @Prop([{
    registrationDate: {type: Date, default: Date.now},
    pass: {type: String, default: ''},
    user: {type: String, default: ''},
    forgotToken: {type: String, default: ''},
    mobilePhone: {type: String, default: ''},
    contactName: {
      first: {type: String, default: ''},
      last: {type: String, default: ''}
    },

    facebook: {
      userId: {type: String, default: ''},
      accessToken: {type: String, default: ''}
    },

    linkedin: {
      userId: {type: String, default: ''},
      country: {type: String, default: ''},
      profileUrl: {type: String, default: ''}
    },

    credentials: {
      verify_token: {type: String, default: ''}
    }
  }])
  users: {
    registrationDate: Date,
    pass: string,
    user: string,
    forgotToken: string,
    mobilePhone: string,
    contactName: {
      first: string,
      last: string
    },
    facebook: {
      userId: string,
      accessToken: string
    },
    linkedin: {
      userId: string,
      country: string,
      profileUrl: string
    },
    credentials: {
      verify_token: string
    }
  }[];

}

export const saasSchema = SchemaFactory.createForClass(Saas);
