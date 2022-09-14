import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({collection: 'Profile'})
export class Profile {
  @Prop()
  ID: number;

  @Prop()
  _id: number;

  @Prop({type: String, default: 'emptyProfile', unique: true})
  profileName: string;

  @Prop({type: String, default: 'No description'})
  profileDescription: string;

  @Prop([{
    module: {type: Number, ref: 'modules'},
    access: {
      read: {type: Boolean, default: false},
      editWrite: {type: Boolean, default: false},
      del: {type: Boolean, default: false}
    }
  }])
  profileAccess: {
    module: number,
    access: {
      read: boolean,
      editWrite: boolean,
      del: boolean
    }
  }[];

}

export const profileSchema = SchemaFactory.createForClass(Profile);
