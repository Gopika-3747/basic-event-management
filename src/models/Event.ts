import mongoose, { Schema, Document } from 'mongoose';

interface IEvent extends Document {
  title: string;
  description: string;
  date: Date;
}

const eventSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: {
    type: Date,
    required: true,
    validate: {
      validator: (value: Date) => value > new Date(),
      message: 'Date must be in the future',
    },
  }
,  
});

const Event = mongoose.model<IEvent>('Event', eventSchema);

export default Event;
