
import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  name: String,
  agent: String,
  area: String,
  details:String,
  setTask:Boolean
});
